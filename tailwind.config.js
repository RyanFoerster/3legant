/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
  content: ["./src/**/*.{html,ts}", "./components/**/*.{html,ts}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "promotion-video": "url('assets/images/video.png')",
      },
    },

    animation: {
      scroll: "scroll 10s infinite linear",
    },
    keyframes: {
      scroll: {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(calc(-250px * 6))",
        },
      },
    },
  },
  plugins: [],
};
