import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Content from 'home/components/Content/Content'
import { useTheme } from 'react-native-paper';
import Header from 'home/components/Header/Header';


const App = () => {
  const theme = useTheme();

  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: 'rgba(49, 46, 255, 0.85)',
      secondary: '#e3f0ff',
      tertiary: '#000000'
    },
  };
  

  const appStyle = StyleSheet.create({
    container: {
      flex: 1,
    }
  })

  return (
    <View style={appStyle.container}>
      <Header theme={customTheme}/>
      <Content theme={customTheme}/>
    </View>
  )
}

export default App