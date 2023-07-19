/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      }
    },
    colors: {
      transparent: 'transparent',
      primary: '#E16E1A',
      onPrimary: '#FFDFB9',
      primaryContainer: '#A75B14',
      onPrimaryContainer: '#F5C58E',
      secondary: '#FFFFFF',
      tertiary: '#BABABA',
      surface: '#202022',
      onSurface: '#2A2A2A',
      white: '#FFFFFF',
      black: '#000000'
    },
    container: {
      center: true
    }
  },
  plugins: [],
}
