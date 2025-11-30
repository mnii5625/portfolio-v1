import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [{
          loader: '@svgr/webpack',
          options: {
            svgo: false
          }
        }],
        as: '*.js'

      }
    }
  }
};

export default nextConfig;
