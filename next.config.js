/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Static HTML export → works with GitHub Pages
  trailingSlash: true,   // Ensures /experience/ resolves correctly on GH Pages
  images: {
    unoptimized: true,   // Required for static export (no Next.js image server)
  },
}

module.exports = nextConfig
