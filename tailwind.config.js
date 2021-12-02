module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'mon': ['Montserrat', 'san-serif'],
        'open': ['Open Sans', 'sans-serif']
      },
      colors: {
        darkblue: '#021b59',
        ltblue: '#53a4ff',
        orange: '#ff671f',
        teal: '#5BD686'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
