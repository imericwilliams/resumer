module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        gray_600: "#8b9274",
        indigo_900_4c: "#0e0e524c",
        bluegray_100_1e: "#d9d9d91e",
        gray_601: "#a0616a",
        gray_301: "#e4e4e4",
        gray_400: "#cacaca",
        bluegray_100: "#cccccc",
        gray_300: "#e6e6e6",
        gray_100: "#f2f2f2",
        bluegray_900: "#2f2e41",
        bluegray_800: "#3f3d56",
        indigo_100: "#b7bcfc",
        black_900: "#000000",
        deep_orange_101: "#ffb7b7",
        indigo_900: "#0e0e52",
        indigo_901: "#150578",
        white_A700: "#ffffff",
        deep_orange_100: "#ffb6b6",
        indigo_600: "#3943b7",
      },
      borderRadius: { radius6: "6px", radius8: "8px" },
      fontFamily: { montserrat: "Montserrat", inter: "Inter" },
      letterSpacing: {
        ls1: "-1px",
        ls11: "1px",
        ls05: "-0.5px",
        ls051: "0.5px",
        ls025: "0.25px",
        ls125: "-1.25px",
        ls015000000596046448: "0.15000000596046448px",
      },
      backgroundImage: {
        gradient: "linear-gradient(88deg ,#0e0e52,#150578,#ffffff)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};