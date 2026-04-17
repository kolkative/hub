import { initializeReverseProxy, reverseProxy } from "notehost";
import { SITE_CONFIG } from "./site-config";

initializeReverseProxy(SITE_CONFIG);

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // handle subdomain nccf
    if (
      url.hostname === "nccf.kolkative.my.id" &&
      !url.pathname.startsWith("/nccf")
    ) {
      url.pathname = `/nccf${url.pathname}`;
      request = new Request(url.toString(), request);
    }

    return await reverseProxy(request);
  },
};
