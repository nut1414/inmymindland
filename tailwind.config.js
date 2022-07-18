module.exports = {
  content: ['./pages/**/*.{html,js,jsx,tsx}', './components/**/*.{html,js,jsx,tsx}'],
  theme: {
    screens: {
      'mobile': {'min': '320px', 'max': '767px'},
      'medium-tablet': {'min': '768px', 'max': '1023px'},
      'big-device': {'min': '1024px'},
    },
    extend: { 
      fontFamily: {
      Kanit: ["'Kanit'", 'sans-serif']
      },
      colors: {
        'originalBlue': '#0080FF',
      },
    },
  },
  plugins: [],
}
