module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF9900",

          secondary: "#FF8500",

          accent: "#008296",

          neutral: "#EAEDED",

          "base-100": "#FFFFFF",

          info: "#323232",

          success: "#F7F7F7",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

  