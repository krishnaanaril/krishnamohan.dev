module.exports = {
  content: ['./src/**/*.html', './src/**/*.ts'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
    , require('@tailwindcss/line-clamp')
    , require('@tailwindcss/typography')
  ],
};
