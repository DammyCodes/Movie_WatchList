/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  './index.html',
],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': "url('/images/header_img.jpg')",
      }
    },
  },
  plugins: [],
}

