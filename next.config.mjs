import { NextFederationPlugin } from '@module-federation/nextjs-mf'
/** @type {import('next').NextConfig} */

process.env.NEXT_PRIVATE_LOCAL_WEBPACK = true;

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'footer',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        exposes: {
          './footer': './src/components/FooterComponent',
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );
    return config;
  }
}

export default nextConfig;
