import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomItem from './components/BottomItem';

import { useNavigation } from '@react-navigation/native';

const BOTTOM_SHEET_ITEMS = [
  {id: 2, value: 'activity', label: 'Atividades'},
  {id: 1, value: 'home', label: 'Home'},
  {id: 1, value: 'profile', label: 'Perfil'},
];

const BottomSheet = ({ theme }) => {

  const navigation = useNavigation();

  const [screen, setScreen] = useState('/profile');

  const bottomSheetStyle = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.otherWhite,
      width: '90%',
      height: 60,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 6,
      left: 20,
      bottom: 15,
      position: 'absolute'
    },
    cardsContainer: {
      width: 30,
    },

    // primary: '#ffffff',
    // secondary: '#2f313f',
    // tertiary: '#000000',
    // otherWhite: '#30363d'

    // primary: '#312eff',
    // secondary: '#e3f0ff',
    // tertiary: '#000000',
    // otherWhite: '#f0f6fd'
  });

  function screenSelection(url) {
    setScreen(`/${url}`);
    navigation.navigate(`/${url}`)
  }

  return (
    <View style={bottomSheetStyle.container}>
      {BOTTOM_SHEET_ITEMS.map((item, index) => (
        <BottomItem
          id={item.id}
          name={item.label}
          value={item.value}
          theme={theme}
          url={screen}
          onChange={screenSelection}
          navigation={navigation}
        />
      ))}
    </View>
  );
};

export default BottomSheet;
