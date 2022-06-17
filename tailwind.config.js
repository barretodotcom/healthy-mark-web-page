module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors:{
        brand:{
          500: '#8257e6'
        },
        healty:{
          'cyan':'#35c5ff',
          'cyan-hover':'#93dbff'
        }
      },
      transitionDuration:{
        '2':'2000ms'
      },
      spacing:{
        '18':'4rem',
        '3c':'20rem',
        '4c':'24rem',
        '4.5c':'25rem',
        '5c':'30rem',
        '5.5c':'28rem',
        '6c':'32rem',
        '9c':'37rem',
        '10c':'40rem',
        '12c':'45rem',
        '30':'7.5rem',
        '84':'22rem',
        '88':'22rem'
      }
    }
  },
  plugins: [],
}