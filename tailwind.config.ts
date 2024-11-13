import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height:{
 
        '128':'32rem',
        '500':'37rem',

        '32':'32rem',
        '37':'37rem', 
        '21':'21rem',
        '22':'22rem',
        '23':'23rem',
        
      },
      width:{
        '32':'32rem',
        '37':'37rem',
        '21':'21rem',
        '22':'22rem',
        '23':'23rem',
        

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        'custom': '-2px -2px 0 #F6FEFF, 2px -2px 0 #F6FEFF, -2px 2px 0 #F6FEFF, 2px 2px 0 #F6FEFF',
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
export default config;
