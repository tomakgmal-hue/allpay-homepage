/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        allpay: {
          navy: "#001F4D",
          blue: "#005DCC",
          sky: "#00A3FF",
          gradientStart: "#003A85",
          gradientEnd: "#0078FF",
        },
      },
      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
}
