/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "Inter_600SemiBold",
        subtitle: "Inter_500Medium",
        body: "Inter_400Regular",
        bold: "Inter_700Bold",
      },
      colors: {
        "gray-700": "#0D0D0D",
        "gray-600": "#1A1A1A",
        "gray-500": "#262626",
        "gray-400": "#333333",
        "gray-300": "#808080",
        "gray-200": "#D9D9D9",
        "gray-100": "#F2F2F2",
        danger: "#E25858",
        blueDark: "#1E6F9F",
        blue: "#4EA8DE",
        purpleDark: "#5E60CE",
        purple: "#8284FA",
        homeBg: "#191919"
      }
    },
  },
  plugins: [],
}

