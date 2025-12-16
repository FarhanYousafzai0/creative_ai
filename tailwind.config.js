/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
      "./app/**/*.{js,jsx}",
      "./src/app/**/*.{js,jsx}",
      "./src/components/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
      "./pages/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          heading: ["var(--font-dm-sans)"],
          sans: ["var(--font-geist-sans)"],
        },
      },
    },
    plugins: [],
  };
  