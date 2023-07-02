/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        allrox: ['var(--font-allrox)'],
        geologica: ['var(--font-geologica)'],
      },
      spacing:{
        '120':'30rem',
        '128':'32rem',
        '144':'36rem'
      },
      colors: {
        'brand': {
          '50': '#fbf5ff',
          '100': '#f2dbff',
          '200': '#e4b8ff',
          '300': '#d694ff',
          '400': '#c870ff',
          '500': '#ba4efd',
          '600': '#a92cf2',
          '700': '#901cd4',
          '800': '#751aa2',
          '900': '#65188c',
          '950': '#640594',
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}