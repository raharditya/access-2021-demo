module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx,svg}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // backgroundImage: (theme) => ({
      //   "background-cover": "url('/src/assets/login-bg-web.jpg')",
      //   "background-pattern": "url('/src/assets/login-decor.svg')",
      // }),

      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },

      minHeight: {
        0: "0",
        "1/4": "25vh",
        "1/2": "50vh",
        "3/4": "75vh",
      },

      borderRadius: {
        5: "5rem",
        6: "6rem",
      },

      maxWidth: {
        30: "30%",
        70: "70%",
        15: "15rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
