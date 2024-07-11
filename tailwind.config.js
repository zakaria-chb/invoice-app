/** @type {import('tailwindcss').Config} */
// const FormKitVariants = require('@formkit/themes/tailwindcss')
import formKitTailwind from '@formkit/themes/tailwindcss'

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './tailwind-theme.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    formKitTailwind
  ]
  // plugins: [FormKitVariants],
}

// Because the FormKit.com playground is browser-based
// with ESM imports, this config is structured differently
// than your actual tailwind.config.js would be in your
// own project.


