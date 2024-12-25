/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customtheme: {
          primary: "#fff",
          secondary: "#fff",
          accent: "#fff",
          neutral: "#ffffff",
          "base-100": "#fff",
        },
      },
    ],
  },
};
