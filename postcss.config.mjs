/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
        'custom-properties': false
      },
    },
  },
};

export default config;