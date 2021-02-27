module.exports = {
  purge: ['./src/**/*.html', './src/**/*.ts'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')
    , require('@tailwindcss/line-clamp')
    , require('@tailwindcss/typography')
  ],
};
