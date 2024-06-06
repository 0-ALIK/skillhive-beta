/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#B72FF5",
          "secondary": "#F40177",          
          "accent": "#BE3DF9",
          "neutral": "#F91582",
          "base-100": "#01010D",
          "info": "#f3f4f6",          
          "success": "#4ade80",
          "warning": "#fef08a",          
          "error": "#f87171"
        }
      }
    ],
  },
}

