/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.content-auto': {
          'content-visibility': 'auto',
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
      })
    })
  ],
}
