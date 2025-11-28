import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
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
