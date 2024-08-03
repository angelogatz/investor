import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './components/Header'
import Content from './components/Content/Content'

const Home = () => {
  return (
    <View style={homeStyles.container}>
      <Header />
      <Content />
    </View>
  )
}

const homeStyles = StyleSheet.create({
  container: {
    backgroundColor: '#555',
    display: 'flex',
    flexDirection: 'column',
  },
});

export default Home