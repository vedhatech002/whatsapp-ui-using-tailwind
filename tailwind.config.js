/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'chatarea-background': "url('https://e0.pxfuel.com/wallpapers/722/149/desktop-wallpaper-message-background-whatsapp-message-background-thumbnail.jpg')",

      },
      gridTemplateColumns: {
        'tablist-grid': '0.5fr 1fr 1fr 1fr'
      }
    },
  },
  plugins: [],
}

