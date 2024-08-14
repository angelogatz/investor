import React, { Fragment } from 'react'
import { View, StyleSheet } from 'react-native'

import { useRoute } from '@react-navigation/native';

import { Content } from './components'
import { Header } from './components'

const Home = () => {

  const route = useRoute();
  const { customTheme } = route.params

  const homeStyle = StyleSheet.create({
    container: {
      flex: 1,
    }
  })

  return (
    <View style={homeStyle.container}>
      <Header theme={customTheme}/>
      <Content theme={customTheme}/>
    </View>
  )
}

export default Home