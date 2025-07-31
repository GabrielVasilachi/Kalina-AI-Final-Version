/** @type {import('next').NextConfig} */
const repo = 'Kalina-AI-Final-Version-1';
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'assets.Kallina.ai'],
  },
  webpack: (config) => {
    // Handle Three.js modules
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    });
    
    return config;
  },
};

module.exports = nextConfig;
