import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      /* p = primary. c = contrast. d = darker. l = lighter. vl = very light */
      colors: {
        pdd: "#5d2d0a",
        pd: "#864e26",
        p: "#a76c43",
        pl: "#c9946e",
        pll: "#f5caac",
        cdd: "#073a33",
        cd: "#18544c",
        c: "#2a6960",
        cl: "#457e76",
        cll: "#6c9a93",
        clll: "#80a39c",
        cllll: "#94b2ac",
        cvl: "#a9c1bc",
        cvll: "#bed0cc",
        cvlll: "#d4dfdd",
        cvllll: "#e9efee",
        "bg-light": "#282830",
        "bg-dark": "#161620",
        "bg-dark-primary": "#563b2b",
        "text-primary": "#fcf1e8",
      },
      boxShadow: {
        "container-left": "30px 0px 40px 35px rgba(0,0,0,0.3);",
        "container-top": "0px 30px 40px 35px rgba(0,0,0,0.3);",
      },
    },
  },
  plugins: [],
} satisfies Config;
