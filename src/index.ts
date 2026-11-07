import { initializeReverseProxy, reverseProxy } from 'notehost'
import { SITE_CONFIG } from './site-config'

initializeReverseProxy(SITE_CONFIG)

const siteImage = SITE_CONFIG.siteImage

export default {
  async fetch(request: Request): Promise<Response> {
    const response = await reverseProxy(request)

    if (!siteImage || !response.headers.get('content-type')?.includes('text/html')) {
      return response
    }

    return new HTMLRewriter()
      .on('meta[property="og:image"], meta[property="og:image:secure_url"], meta[name="twitter:image"]', {
        element(element) {
          element.setAttribute('content', siteImage)
        },
      })
      .transform(response)
  },
}
