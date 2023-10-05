/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'aot',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/widgets/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/entities/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#0006BB',
      primaryLight: '#898DFF',
      primaryDark: '#1F215E',
      secondary: '#EEEFFF',
      secondaryDark: '#E4E1FF',
      active: '#A8FFC0',
      activeDark: '#008E30',
      passive: '#EFEFEF',
      passiveDark: '#909090',
      lightgray: '#6B6B6B',
      gray: '#979797',
      grayLight: '#F9FAFB',
      darkGray: "#525252",
      white: '#FFFFFF',
      black: '#000',
      darkened: '#2E2E2E',
      lightBlue: '#D8E3FF',
      lightGreen: '#CFF1E5',
      lightOrange: '#FFEDDD',
      lightPurple: '#EFDDF2',
      lightPink: '#FFE4E4',
      lighterBlue: '#F4F5FF'
    },
    extend: {
      keyframes: {
        growDown: {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.1)' },
          '100%': { transform: 'scaleY(1)' },
        },
        growUp: {
          '0%': {
            opacity: '0%',
            transform: 'translateY(0px)'
          },
          '100%': {
            opacity: '100%',
            transform: 'translateY(-8px)'
          }
        }
      }
    },
  },
  plugins: [],
}
