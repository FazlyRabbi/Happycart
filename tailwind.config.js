module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 375px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
