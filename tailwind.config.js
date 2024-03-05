/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '7/6': '7 / 6',
        '97/138':'97/138'
      },
    },
  },
  plugins: [],
}
