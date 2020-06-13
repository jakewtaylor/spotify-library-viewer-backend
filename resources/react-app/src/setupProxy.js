const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://spotify-viewer-api.test',
      changeOrigin: true,
    }),
  );
};
