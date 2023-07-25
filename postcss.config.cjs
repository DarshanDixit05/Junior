const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': postcssNested,
    tailwindcss: tailwindcss,
    autoprefixer: autoprefixer,
  },
};
