/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Wellfleet' : ['Wellfleet', 'cursive'],
      'lemon': ['Lemon', 'cursive']
    },
    boxShadow: {
      'shadow3dinset': 'inset 0px -3px 6px 5px #141728, 5px 5px 5px 2px rgba(0, 0, 0, .25)',
      'shadowCard': 'inset 0px -3px 10px rgba(255, 255, 255, .40),  5px 5px 5px 2px rgba(255, 255, 255, .70)',
      '3dshadowcard': 'inset 0px -3px 10px rgba(0, 0, 0, .50),  5px 5px 5px 2px rgba(0, 0, 0, .25)'
    },
      extend: {
      colors: {
        primary: "#E1D49F",
      },
      boxShadow: {
        'custom': 'inset 0 70px 100px 0px rgb(0, 0, 0)',
      }
    },
  },
  plugins: [],
}
