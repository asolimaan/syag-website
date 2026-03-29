/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        electric: "#2F7BFF",
        cyan: "#35E0FF",
        slate: "#94A3B8"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(10, 22, 40, 0.2)",
        card: "0 12px 30px rgba(10, 22, 40, 0.15)"
      }
    }
  },
  plugins: []
};
