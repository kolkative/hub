import { initializeReverseProxy, reverseProxy } from "notehost";
import { SITE_CONFIG } from "./site-config";

initializeReverseProxy(SITE_CONFIG);

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const requestUrl = new URL(request.url);
    if (requestUrl.pathname === "/f/refresh") {
      requestUrl.protocol = "https:";
      requestUrl.hostname = SITE_CONFIG.notionDomain
        ? `${SITE_CONFIG.notionDomain}.notion.site`
        : "www.notion.so";
      requestUrl.port = "";

      return fetch(requestUrl.toString(), {
        method: request.method,
        headers: request.headers,
        body:
          request.method === "GET" || request.method === "HEAD"
            ? undefined
            : request.body,
      });
    }

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
