/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'verde-prado': '#6A994E',
        'blanco-roto': '#F5F5F5',
        'gris-piedra': '#4A4A4A',
        'azul-sella': '#A9D6E5',
        'amarillo-sidra': '#FBB13C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}