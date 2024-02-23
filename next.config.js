/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'iw3zrnkpppzzjtl6.public.blob.vercel-storage.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
