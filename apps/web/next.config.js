const withTM = require('next-transpile-modules')(['ui']);
const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer(
  withTM({
    reactStrictMode: true,
  })
);
