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

  const [screen, setScreen] = useState('/home');

  const bottomSheetStyle = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
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
