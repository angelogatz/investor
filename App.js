import React, { Fragment } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import { BottomSheet } from 'components';
import { Home, UserScreen } from 'modules'

const Stack = createNativeStackNavigator();

const App = () => {
  const theme = useTheme();

  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: 'rgba(49, 46, 255, 0.85)',
      secondary: '#e3f0ff',
      tertiary: '#000000',
      otherWhite: '#f0f6fd'
    },
  };

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: 'transparent',
        },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="/home"
          component={Home}
          initialParams={{ customTheme }}
        />

        <Stack.Screen 
          name="/profile" 
          component={UserScreen} 
          initialParams={{ customTheme }}
        />
      </Stack.Navigator>
      <BottomSheet theme={customTheme} />
    </NavigationContainer>
  )
}

export default App