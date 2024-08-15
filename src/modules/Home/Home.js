import React, { Fragment } from 'react'
import { View, StyleSheet } from 'react-native'

import { useRoute } from '@react-navigation/native';

import { Content } from './components'
import { Header } from './components'

const Home = ({ navigation }) => {

  const route = useRoute();
  const { theme } = route.params

  const homeStyle = StyleSheet.create({
    container: {
      flex: 1,
    }
  })

  return (
    <View style={homeStyle.container}>
      <Header theme={theme} navigation={navigation}/>
      <Content theme={theme}/>
    </View>
  )
}

export default Home