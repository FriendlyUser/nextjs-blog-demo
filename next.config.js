/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  experimental: {
    appDir: true,
  },

  // assetPrefix: isProd ? '/nextjs-blog-demo' : undefined,
}

module.exports = nextConfig
