// next.config.mjs

import { withContentlayer } from 'next-contentlayer'

export default withContentlayer({
    experimental: {
        appDir: true,
      },
})