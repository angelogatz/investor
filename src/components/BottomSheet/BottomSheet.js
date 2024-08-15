import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomItem from './components/BottomItem';
import { useGlobalContext } from '../context/globalContext';


const BOTTOM_SHEET_ITEMS = [
  {id: 2, value: 'activity', label: 'Atividades'},
  {id: 1, value: 'home', label: 'Home'},
  {id: 1, value: 'profile', label: 'Perfil'},
];

const BottomSheet = () => {

  const { theme } = useGlobalContext();

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
  });

  return (
    <View style={bottomSheetStyle.container}>
      {BOTTOM_SHEET_ITEMS.map((item) => (
        <BottomItem
          id={item.id}
          name={item.label}
          value={item.value}
        />
      ))}
    </View>
  );
};

export default BottomSheet;
