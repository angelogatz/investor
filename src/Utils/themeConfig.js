import { MD3LightTheme, MD3DarkTheme,  } from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'rgba(49, 46, 255, 0.85)',
    secondary: '#e3f0ff',
    tertiary: '#000000',
    otherWhite: '#f0f6fd',
    fontColor: '#2f313f'
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#ffffff',
    secondary: '#2f313f',
    tertiary: '#000000',
    otherWhite: '#35373d',
    fontColor: '#e3f0ff'
    // Adicione mais cores ou estilos personalizados aqui
  },
};