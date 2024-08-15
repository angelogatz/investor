import React, { Fragment, useState } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

import { BottomSheet } from 'components';
import { Home, UserScreen } from 'modules'
import { darkTheme, lightTheme } from './src/Utils/themeConfig';

const Stack = createNativeStackNavigator();

const App = ({ isDarkTheme, setIsDarkTheme, theme }) => {

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
          initialParams={{theme}}
        />

        <Stack.Screen 
          name="/profile"
          children={(props) => (
            <UserScreen
              {...props}
              theme={theme}
              onChangeTheme={() => setIsDarkTheme(!isDarkTheme)}
            />
          )}
        />
      </Stack.Navigator>
      <BottomSheet theme={theme} />
    </NavigationContainer>
  )
}

export default App