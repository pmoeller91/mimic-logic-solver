/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      /* p = primary. c = contrast. d = darker. l = lighter. */
      colors: {
        pdd: '#5d2d0a',
        pd: '#864e26',
        p: '#a76c43',
        pl: '#c9946e',
        pll: '#f5caac',
        cdd: '#073a33',
        cd: '#18544c',
        c: '#2a6960',
        cl: '#457e76',
        cll: '#6c9a93',
      },
    },
  },
  plugins: [],
};
