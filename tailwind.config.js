module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navBar: "#820306",
        loginBtn: "#820306"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}