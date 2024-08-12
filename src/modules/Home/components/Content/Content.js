import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ActionCards from './components/ActionCards';
import Activity from './components/Activity';
import BottomSheet from './components/BottomSheet/BottomSheet';

const Content = ({ theme }) => {
  const contentStyles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.secondary,
      flex: 1.5,
      borderTopLeftRadius: 22,
      borderTopRightRadius: 22,
      alignItems: 'center'
    },
  });

  return (
    <View style={contentStyles.container}>
      <ActionCards theme={theme} />
      <Activity theme={theme} />
      <BottomSheet theme={theme} />
    </View>
  )
};


export default Content;
