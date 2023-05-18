/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    margin: {
      '343': '21.4rem',
      '101': '6.3rem',
      '89': '5.5rem',
      '3':'2.9rem',
      '7':'7rem',
      '1.25':'1.25'
    },
    height: {
      '2.5' : '2.5rem',
      '3' : '3.1rem',
      '7':'7rem'
    },
    width: {
      '32':'32rem',
      '29':'29rem',
      '15':'15rem'
    },

    fontSize: {
      '30': '1.8rem',
      '22': '1.3rem'
    },
    colors: {
      'maincolor': "#EAEAEA",
      'yellow': '#D6D16E',
      'black': '#232323',
      'red':'#F15524'
    },
    inset: {
      '230': '14.3rem',
      '127': '10rem',
      '59':'59rem',
      '55':"55rem"
    },
    padding: {
      '200': '12.5rem',
      '165': '10.31rem'
    }
  },
};
export const plugins = [];