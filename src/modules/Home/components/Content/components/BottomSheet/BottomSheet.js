import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomItem from './components/BottomItem';

const BOTTOM_SHEET_ITEMS = [
  {id: 2, value: 'activity', label: 'Atividades'},
  {id: 1, value: 'home', label: 'Home'},
  {id: 1, value: 'profile', label: 'Perfil'},
];

const BottomSheet = ({theme}) => {
  const [url, setUrl] = useState('/home');

  const bottomSheetStyle = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      width: '90%',
      bottom: 35,
      flex: 1.5,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 6,
    },
    cardsContainer: {
      width: 30,
    },
  });

  function screenSelection(url) {
    setUrl(`/${url}`);
  }

  return (
    <View style={bottomSheetStyle.container}>
      {BOTTOM_SHEET_ITEMS.map((item, index) => (
        <BottomItem
          id={item.id}
          name={item.label}
          value={item.value}
          theme={theme}
          url={url}
          onChange={screenSelection}
        />
      ))}
    </View>
  );
};

export default BottomSheet;
