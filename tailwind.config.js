/** @type {import('tailwindcss').Config} */
export default
  {
    content:
      ["./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",],
    theme:
    {
      extend:
      {
        colors:
        {
          primary: "#7C3AED",
          secondary: "#06B6D4",
          accent: "#F472B6",
          darkbg: "#0F0F1A"
        }
      },
    },
    plugins: [],
  }