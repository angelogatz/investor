import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Content } from './components'
import { Header } from './components'
import { useGlobalContext } from '../../components/context/globalContext'

const Home = () => {

  const { theme } = useGlobalContext();

  const homeStyle = StyleSheet.create({
    container: {
      flex: 1,
    }
  })

  return (
    <View style={homeStyle.container}>
      <Header theme={theme}/>
      <Content theme={theme}/>
    </View>
  )
}

export default Home