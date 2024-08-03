import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = () => {
  return <View style={headerStyles.container}></View>;
};

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#3652B8',
    height: 250,
	flex: 1
  },
});

export default Header;
