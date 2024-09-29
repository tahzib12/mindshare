module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Merging both keyframes
        'move-up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(50px)' },
        },
        // Adding the scale keyframes in the same object
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        // Merging both animations
        'up-down': 'move-up-down 4s ease-in-out infinite',
        scale: 'scale 2s infinite ease-in-out',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        }
      });
    },
  ],
}
