/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.wootest-79194b.ingress-bonde.ewp.live.**"'
        //hostname: `${process.env.NEXT_REMOTE_PATTERN_HOSTNAME}`
      }
    ]
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
}

module.exports = nextConfig
