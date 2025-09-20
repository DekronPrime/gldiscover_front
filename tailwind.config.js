/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        light: "var(--light)",
      },
      fontFamily: {
        nunitoRegular: ["var(--font-nunito-regular)"],
        nunitoSemibold: ["var(--font-nunito-semibold)"],
        nunitoBold: ["var(--font-nunito-bold)"],
        exo2Regular: ["var(--font-exo2-regular)"],
        exo2Semibold: ["var(--font-exo2-semibold)"],
        exo2Bold: ["var(--font-exo2-bold)"],
        poppinsRegular: ["var(--font-poppins-regular)"],
        poppinsSemibold: ["var(--font-poppins-semibold)"],
        poppinsBold: ["var(--font-poppins-bold)"],
        agenorNeueRegular: ["var(--font-agenor-neue-regular)"],
        londonBetweenRegular: ["var(--font-london-between-regular)"],
        londonMMRegular: ["var(--font-london-mm-regular)"],
        londonTwoRegular: ["var(--font-london-two-regular)"],
      },
    },
  },
  plugins: [],
};
