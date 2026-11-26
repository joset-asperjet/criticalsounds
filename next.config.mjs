/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/academy',
        destination: 'https://www.criticalsounds.academy',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
