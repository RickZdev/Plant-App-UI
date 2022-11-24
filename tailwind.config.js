/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#748749',
        secondary: '#686868'
      },
      fontFamily: {
        // fonts that are installed on assets/fonts folder
        EinaBold: 'Eina03-Bold',
        EinaSemiBold: 'Eina03-SemiBold',
        EinaRegular: 'Eina03-Regular',
      }
    }
  },
  plugins: [],
}
