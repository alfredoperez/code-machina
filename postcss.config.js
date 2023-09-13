const config = {
  plugins:  {
    'postcss-import': {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',

    },
    tailwindcss: {},
    autoprefixer: {},
  },
};

module.exports = config;

