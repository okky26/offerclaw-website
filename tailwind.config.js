/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './section/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors : {
        'primary-head' : '#202226',
        'primary-bg' : '#d2bf8c',
        'primary-img-bg' : '#2F343E',
        'primary-cat-bg' : '#F5F8FB',
        'primary-post-cat' : '#a8bde6'
      },
      fontFamily : {
        'sans-serif' : ['Inter', 'sans-serif'],
        'gothic' : ['GOTHICB', 'sans-serif']
      },
      backgroundImage : {
        'header' : 'url(../public/Img/Header.png)',
        'footer' : 'url(../public/Img/Footer.png)',
        'neomorphism' : 'linear-gradient(145deg, #f0f0f0, #cacaca)'
      },
      animation : {
        'slideRight' : 'slideRight .6s linear forwards'
      },
      keyframes : {
        slideRight : {
          'from' : {transform : 'translateX(-100%)',opacity : 0},
          'to' : {transform : 'translateX(0)', opacity : 1}
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
