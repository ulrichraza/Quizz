/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
module.exports = {
  content: [
    './public/**/*.html',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: '#243f85',
        yellow: '#ffff00',
        lightBlue: '#D7D7FF',
        blue: '#1D9BF0',
      },
    },
  },
  plugins: [nextui()],
};
