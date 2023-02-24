/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  images: {
    loader: "default",
    domains: ["localhost"],
  },
      // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
      compiler: {
        // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
        styledComponents: {
          // Enabled by default in development, disabled in production to reduce file size,
          // setting this will override the default for all environments.
          displayName: true,
          // Enabled by default.
          ssr: true,
          // Enabled by default.
          fileName: false,
          // Empty by default.
          topLevelImportPaths: [],
          // Defaults to ["index"].
          meaninglessFileNames: ["index"],
          // Enabled by default.
          cssProp: true,
          // Empty by default.
          namespace: "",
          // Not supported yet.
          // minify?: boolean,
          // Not supported yet.
          // transpileTemplateLiterals?: boolean,
          // Not supported yet.
          // pure?: boolean
        }
      }
}

module.exports = nextConfig;
