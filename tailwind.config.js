module.exports = {
  content: ["src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "rgb(255,81,81)",
          700: "rgb(255,63,38)",
        },

        white: "rgb(255,255,255)",
        gray: {
          200: "rgb(244,245,246)",
          500: "rgb(65,81,97)",
          100: "rgba(0,0,0,0.07)",
        },
      },
    },
  },

  plugins: [],
};
