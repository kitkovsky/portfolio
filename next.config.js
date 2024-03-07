/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  rewrites: async () => {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://eu-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://eu.i.posthog.com/:path*',
      },
    ]
  },
}

export default nextConfig
