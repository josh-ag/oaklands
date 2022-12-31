module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'image1': "url('./assets/image1.webp')",
        'meetings': "url('./assets/meetings.webp')",
        'landing': "url('./assets/landing.webp')"
      },
    },
  },
  variants: {
    extend: {},
  },
  Plugin: [],
  // plugins: [require("@tailwindcss/forms")],
};
