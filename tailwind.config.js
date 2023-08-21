module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "270px",
      xs: "320px",
      sm: "450px",
      md: "748px",
      lg: "1250px",
      xl: "1440px",
    },
    spacing: {
      0: "0px",
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
      7: "64px",
      8: "96px",
      9: "128px",
      10: "192px",
      11: "256px",
      12: "384px",
      13: "512px",
    },

    extend: {
      colors: {
        webRed: "#ee4962",
        webGreen: "#1ab79d",
        btn: "#20BF55",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif", "cursive"],
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
