import { initializeReverseProxy, reverseProxy } from "notehost";
import { SITE_CONFIG } from "./site-config";

initializeReverseProxy(SITE_CONFIG);

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const cache = caches.default;
    const cached = await cache.match(request);
    if (cached) return cached;

    const response = await reverseProxy(request);

    // Cache HTML page selama 5 menit
    if (response.headers.get("content-type")?.includes("text/html")) {
      const res = new Response(response.body, response);
      res.headers.set("Cache-Control", "public, max-age=300");
      ctx.waitUntil(cache.put(request, res.clone()));
      return res;
    }

    return response;
  },
};
