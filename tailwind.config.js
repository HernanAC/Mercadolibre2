/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./atoms/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': 
        '0 1px 1px rgba(0, 0, 0, 0.07), 0 2px 2px rgba(0, 0, 0, 0.07),0 4px 4px rgba(0, 0, 0, 0.07), 0 8px 8px rgba(0, 0, 0, 0.07),0 16px 16px rgba(0, 0, 0, 0.07)',
      },
      transitionProperty: {
        'cardTransition': 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "mercadolibre": '#FFF159',
        "header": '#33333399',
        "suscribete1": '#A90F90 55%',
        "suscribete2": '#0C1A51 100%',
        "enviogratis": '#00A650',
      }
    },
  },
  plugins: [],
}
