import { initializeReverseProxy, reverseProxy } from "notehost";
import { SITE_CONFIG } from "./site-config";

initializeReverseProxy(SITE_CONFIG);

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const cache = caches.default;
    const cached = await cache.match(request);
    if (cached) return cached;

    let response = await reverseProxy(request);

    // Cache HTML page selama 5 menit
    if (response.headers.get("content-type")?.includes("text/html")) {
      response = new HTMLRewriter()
        .on("link[rel~='shortcut']", {
          element(element) {
            if (element.getAttribute("href")?.endsWith("/favicon.ico")) {
              element.setAttribute("rel", "icon");
              element.setAttribute("type", "image/svg+xml");
              element.setAttribute("href", "/images/favicon.ico?v=2");
            }
          },
        })
        .transform(response);

      const res = new Response(response.body, response);
      res.headers.set("Cache-Control", "public, max-age=300");
      ctx.waitUntil(cache.put(request, res.clone()));
      return res;
    }

    return response;
  },
};
