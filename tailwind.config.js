/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",         // Todo dentro de src
    "./public/index.html",               // El index.html principal
    "./public/**/*.{html,js}",           // Otros HTML o JS en public
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
