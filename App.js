import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Header from 'home/components/Header'
import Content from 'home/components/Content/Content'
import { useTheme } from 'react-native-paper';


const App = () => {
  const theme = useTheme();

  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: 'rgba(49, 46, 255, 0.85)',
      secondary: '#e3f0ff',
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