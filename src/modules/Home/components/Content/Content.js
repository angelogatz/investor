import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Button, Avatar, Searchbar, TouchableRipple } from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Content = ({ theme }) => {
  const contentStyles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.secondary,
      flex: 1,
      borderTopLeftRadius: 22,
      borderTopRightRadius: 22,
      paddingTop: 230,
    },
    searchBar: {
      backgroundColor: theme.colors.secondary,
      position: 'absolute',
      top: -22,
      width: '90%',
      borderRadius: 22,
      left: 18
    },
    touchRipple: {
      zIndex: 100,
    },
  });

  const icon = (
    <TouchableRipple
    onPress={() => console.warn('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)"
    style={contentStyles.touchRipple}
    >
      <MaterialCommunityIcons name="magnify" size={30}/>
    </TouchableRipple> 
  )

  return (
    <View style={contentStyles.container}>
        <View style={contentStyles.searchBar}>
        <Searchbar
          placeholder="Search"
          onChangeText={() => {}}
          value={''}
          icon={() => icon}
          iconColor={theme.colors.primary}
          theme={theme}
          elevation={3}
          style={{backgroundColor: theme.colors.secondary}}
        />
      </View>
    </View>
  )
};


export default Content;
