import { defineConfig } from 'umi';
import { appName } from './src/conf.json';
import routes from './src/routes';

export default defineConfig({
  title: appName,
  outputPath: 'dist',
  // alias: { '@': './src' },
  npmClient: 'npm',
  base: '/rag/',
  routes,
  publicPath: '/rag/',
  esbuildMinifyIIFE: true,
  icons: {},
  hash: true,
  favicons: ['/rag/logo.svg'],
  clickToComponent: {},
  history: {
    type: 'browser',
  },
  plugins: ['@react-dev-inspector/umi4-plugin', '@umijs/plugins/dist/dva'],
  dva: {},
  jsMinifier: 'terser',
  lessLoader: {
    modifyVars: {
      hack: `true; @import "~@/less/index.less";`,
    },
  },
  devtool: 'source-map',
  copy: ['src/conf.json'],
  proxy: {
    '/v1': {
      target: 'http://localhost:9380/',
      // target: 'http://18.176.173.75:9080/',
      changeOrigin: true,
      ws: true,
      logger: console,
      // pathRewrite: { '^/v1': '/v1' },
    },
  },
});
