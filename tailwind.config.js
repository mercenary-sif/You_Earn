/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
      "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
    theme: {
    extend: {
      boxShadow: {
       
        'dual-cyan': '4px 4px 10px 0 rgba(44,218,255,0.25), -4px -4px 10px 0 rgba(44,216,255,0.25)',
      },
        fontFamily: {
        'font-1': 'var(--font-1)',
        'font-2':'var(--font-2)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),        // if you want nicer forms
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      addUtilities({
        '.ltr': { direction: 'ltr' },
        '.rtl': { direction: 'rtl' },
      })
    }   // for prose content
  ],

}

