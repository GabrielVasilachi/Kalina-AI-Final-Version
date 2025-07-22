/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New cool-gray brand palette
        brand: {
          100: '#EAEFEF', // Lightest
          200: '#B8CFCE',
          300: '#7F8CAA',
          400: '#333446', // Darkest
        },
        // Legacy aliases mapped to new palette for backwards compatibility
        primary: {
          50: '#EAEFEF',
          100: '#EAEFEF',
          200: '#B8CFCE',
          300: '#7F8CAA',
          400: '#333446',
          500: '#333446',
          600: '#2A2C3A',
          700: '#21242E',
          800: '#181A22',
          900: '#0F1016',
        },
        accent: {
          50: '#EAEFEF',
          100: '#EAEFEF',
          200: '#B8CFCE',
          300: '#7F8CAA',
          400: '#333446',
          500: '#333446',
          600: '#2A2C3A',
          700: '#21242E',
          800: '#181A22',
          900: '#0F1016',
        },
        neutral: {
          50: '#EAEFEF',
          100: '#EAEFEF',
          200: '#B8CFCE',
          300: '#7F8CAA',
          400: '#333446',
          500: '#333446',
          600: '#2A2C3A',
          700: '#21242E',
          800: '#181A22',
          900: '#0F1016',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
