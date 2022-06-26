module.exports = {
  content: ['./src/**/*.html', './src/**/*.ts'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
    , require('@tailwindcss/line-clamp')
    , require('@tailwindcss/typography')
  ],
};
