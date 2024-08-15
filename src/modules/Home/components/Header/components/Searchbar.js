import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {
  Button,
  Avatar,
  Searchbar,
  TouchableRipple,
  IconButton,
  DropDown,
  Provider,
} from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useGlobalContext } from '../../../../../components/context/globalContext';

var items = [
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Java',
  },
  {
    id: 3,
    name: 'Ruby',
  },
  {
    id: 4,
    name: 'React Native',
  },
  {
    id: 5,
    name: 'PHP',
  },
  {
    id: 6,
    name: 'Python',
  },
  {
    id: 7,
    name: 'Go',
  },
  {
    id: 8,
    name: 'Swift',
  },
];

const SearchPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const { theme } = useGlobalContext();

  useEffect(() => {
    removeInputFocus();
  }, [Keyboard]);

  function removeInputFocus() {
    Keyboard.addListener('keyboardWillHide', () => {
      Keyboard.dismiss();
    });
  }

  const searchPage = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
      height: '100vh',
      backgroundColor: theme.colors.secondary,
    },
    searchBarContainer: {
      width: '80%',
      borderRadius: 30,
      left: 18,
      borderWidth: 1,
      borderColor: theme.colors.secondary,
    },
    searchBar: {
      paddingVertical: 0,
      backgroundColor: 'transparent',
      height: 45,
    },
  });

  return (
    <View style={searchPage.container}>
      <SearchableDropdown
        onItemSelect={item => {
          const items = selectedItems;
          items.push(item);
          setSelectedItems(items);
        }}
        containerStyle={{padding: 5}}
        onRemoveItem={(item, index) => {
          const items = selectedItems.filter(
            sitem => sitem.id !== item.id,
          );
          setSelectedItems(items);
        }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: theme.colors.secondary,
          borderColor: theme.colors.secondary,
          borderWidth: 1,
          borderRadius: 5,
        }}
        itemTextStyle={{color: theme.colors.fontColor}}
        itemsContainerStyle={{maxHeight: 140}}
        items={items}
        defaultIndex={3}
        resetValue={false}
        textInputProps={{
          placeholder: 'Procurar',
          underlineColorAndroid: 'transparent',
          style: {
            padding: 12,
            borderWidth: 1,
            borderColor: theme.colors.secondary,
            borderRadius: 5,
          },
        }}
        listProps={{
          nestedScrollEnabled: true,
        }}
      />
    </View>
  );
};

export default SearchPage;
