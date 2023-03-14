const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/categories',
    createProxyMiddleware({
      target: 'http://localhost:5000/categories',
      changeOrigin: true,
    })
  );
};
