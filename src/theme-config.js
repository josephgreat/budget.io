// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const colors = {
    primary: {
      900: '#290028',
      800: '#520050',
      700: '#6d006a',
      600: '#7a0078',
      500: '#880085',
      400: '#a0339d',
      300: '#b866b6',
      200: '#c480c2',
      100: '#dbb3da',
      50: '#f3e6f3'
    },
    secondary: {
      900: '#b39c00',
      800: '#ccb200',
      700: '#e6c900',
      500: '#ffdf00',
      400: '#ffe533',
      200: '#ffec66',
      100: '#ffef80',
      50: '#fff5b3'
    }
  }
  
let theme = extendTheme({colors});

// 3. extend the theme
theme = extendTheme({ config })

export default theme;