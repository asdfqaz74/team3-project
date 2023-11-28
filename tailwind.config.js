/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./cafe/src/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "flower-01": "url('/images/ani_flower_01.png')",
        "flower-02": "url('/images/ani_flower_02.png')",
        "flower-03": "url('/images/ani_flower_03.png')",
        "flower-04": "url('/images/ani_flower_04.png')",
        "flower-bg": "url('/images/bg_flower.png')",
      },
    },
  },
  plugins: [],
};
