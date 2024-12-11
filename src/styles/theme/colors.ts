const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    100: '#F0F0F0',
    200: '#E0E0E0',
    300: '#C0C0C0',
    400: '#A0A0A0',
    500: '#808080',
    600: '#606060',
    700: '#505050',
    800: '#404040',
    900: '#242424',
  },
  primary: {
    300: '#63AAFB',
    500: '#1565C0',
    700: '#003979',
  },
  secondary: {
    300: '#FFCE83',
    500: '#FF9931',
    700: '#B75918',
  },
  success: {
    300: '#48C15E',
    500: '#008619',
    700: '#005F12',
  },
  error: {
    300: '#DF6565',
    500: '#C03232',
    700: '#8A0707',
  },
  warning: {
    300: '#FFF187',
    500: '#FFE100',
    700: '#DBC100',
  },
};

export default colors;

export type TColors = typeof colors;
