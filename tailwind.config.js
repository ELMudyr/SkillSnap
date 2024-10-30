/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/popup.js",
    './index.html'],
  theme: {
    extend: {},
    colors: {
      text: '#040212',
      background: '#f7f7ff',
      primary: '#2919eb',
      secondary: '#dddcff',
      accent: '#ec5cce',
    }
  },
  plugins: [],
}

