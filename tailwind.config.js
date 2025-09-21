module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4F46E5', // indigo-ish primary
          light: '#6366F1',
          dark: '#3730A3'
        },
        muted: '#6B7280'
      },
      borderRadius: {
        xl: '1rem'
      }
    },
  },
  plugins: [],
}
