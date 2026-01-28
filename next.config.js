/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minificación y bundling: Next.js minifica CSS/JS en producción (`next build`).
  // No hace falta plugin extra; Terser/SWC para JS y PostCSS para CSS.
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
