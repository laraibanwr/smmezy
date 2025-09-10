/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Optional: Customize typography
      },
      colors: {
        brand: {
          primary: '#9333ea',   // Purple-600
          secondary: '#ec4899', // Pink-500
        },
      },
      blur: {
        '3xl': '64px',
      },
      scale: {
        102: '1.02',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),       // Optional: Better form styling
    require('@tailwindcss/typography'),  // Optional: Prose (blog-like text)
    require('@tailwindcss/aspect-ratio') // Optional: Useful for images/videos
  ],
};
