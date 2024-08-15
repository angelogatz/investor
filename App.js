import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { BottomSheet } from 'components';
import { Home, UserScreen } from 'modules'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalContext } from './src/components/context/globalContext';


const App = () => {

  const Stack = createNativeStackNavigator();

  const { isDarkMode } = useGlobalContext();

  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: isDarkMode ? '#a5a5a5a2' : '#312effd9'}}>
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
          />

          <Stack.Screen 
            name="/profile"
            component={UserScreen}
          />
        </Stack.Navigator>
        <BottomSheet />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App