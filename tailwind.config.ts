const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: ['active'],
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sansnarrow': ['PT Sans Narrow', 'sans-serif'],
        'sacramentos': ['Sacramento', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
        'barlow': ['Barlow Condensed', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'noto': ['Noto Sans Kawi', 'sans-serif']
      },
      colors: {
        "dark-purple": "#081451",
        'light-white': 'rgba(255, 255, 255, 0, 10)',
        'light-blue': colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [nextui()],
}