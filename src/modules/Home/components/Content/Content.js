import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Button, Avatar, Searchbar, TouchableRipple } from 'react-native-paper';

const Content = ({ theme }) => {
  const contentStyles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.secondary,
      flex: 1,
      borderTopLeftRadius: 22,
      borderTopRightRadius: 22,
      paddingTop: 230,
    },
  });

  return (
    <View style={contentStyles.container}>

    </View>
  )
};


export default Content;
