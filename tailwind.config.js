/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
export const theme = {
  extend: {
    margin: {
      343: '21.4rem',
      101: '6.3rem',
      89: '5.5rem',
      3: '2.9rem',
      7: '7rem',
      1.25: '1.25',
      2.75: '2.75rem',
      1.5: '1.5rem'
    },
    height: {
      2.5: '2.5rem',
      3: '3.1rem',
      7: '7rem',
      11: '11.5rem',
      3.6: '3.6rem',
      67.5: '67.5rem'
    },
    width: {
      32: '32rem',
      29: '29rem',
      15: '15rem',
      11: '11rem',
      120: '120rem'
    },
    fontSize: {
      30: '1.8rem',
      22: '1.3rem',
      1.25: '1.25rem',
      4: '4rem'
    },
    colors: {
      maincolor: '#EAEAEA',
      yellow: '#D6D16E',
      black: '#232323',
      red: '#F15524',
      green: '#208298'
    },
    fontFamily: {
      sans: ['bgpArial', 'Helvetica', 'Arial', 'sans-serif']
    },
    inset: {
      230: '14.3rem',
      127: '10rem',
      59: '59rem',
      55: '55rem',
      3.75: '3.75rem',
      5: '5rem',
      112: '112rem',
      63: '63rem',
      26.5: '26.5rem',
      49.24: '49.25rem',
      36.25: '36.25rem',
      51: '51rem'
    },
    padding: {
      200: '12.5rem',
      165: '10.31rem'
    }
  }
}
export const plugins = []
