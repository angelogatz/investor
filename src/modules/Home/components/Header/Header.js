import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, Keyboard, Button, Modal, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Searchbar,
  TouchableRipple,
  IconButton,
} from 'react-native-paper';
import {useFonts, Roboto_400Regular} from '@expo-google-fonts/roboto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchPage from './components/Searchbar';

const user = 'Angelo Gatz';
const currencyLabel = 'US Dollar';
const currencyValue = '200.000.000';

const Header = ({theme}) => {

  const [isSearchPageVisible, setSearchPageVisible] = useState(false);

  const openSearchPage = () => {
    setSearchPageVisible(true);
  };

  const closeSearchPage = () => {
    setSearchPageVisible(false);
  };

  const headerStyles = StyleSheet.create({
    container: {
      height: '100%',
      padding: 20,
      flex: 1,
    },
    userImage: {
      borderColor: '#e3f0ff',
      border: 2,
      width: 50,
      height: 50,
      borderWidth: 2,
      borderColor: theme.colors.secondary,
      borderRadius: 50,
    },
    userContent: {
      flexDirection: 'row',
      alignItems: 'center',
      color: theme.colors.secondary,
    },
    userName: {
      margin: 15,
      fontSize: 25,
      fontFamily: 'Roboto_400Regular',
      color: theme.colors.secondary,
      fontWeight: '100',
    },
    currencyLabelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      top: 10,
      right: -5,
    },
    currencyLabelText: {
      fontSize: 18,
      color: theme.colors.secondary,
      fontWeight: '200',
      marginRight: -10,
      marginLeft: -5,
    },
    currencyValueText: {
      fontSize: 35,
      color: theme.colors.secondary,
      fontWeight: '600',
      marginLeft: -5,
    },
    addValueText: {
      fontSize: 15,
      color: theme.colors.secondary,
      fontWeight: '600',
      fontWeight: '300'
    },
    searchBarContainer: {
      width: '70%',
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
    currencyValueContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
    },
    addValueContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
    },
    touchRipple: {
      color: theme.colors.secondary,
    },
    button: {
      elevation: 8,
      backgroundColor: "transparent",
      borderColor: "#ff0000",
      borderWidth: 2,
      borderColor: theme.colors.secondary,
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: 250,
      left: 57,
      top: 14
    },
    buttonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
      fontSize: 15,
      fontWeight: "300"
    },
    bell: {
      backgroundColor: 'transparent',
      left: 25
    }
  });

  const currencyLabelMount = (
    <>
      <IconButton
        icon="flag-variant"
        iconColor={theme.colors.secondary}
        size={20}
        onPress={() => console.log('Pressed')}
      />
      <Text style={headerStyles.currencyLabelText}>{currencyLabel}</Text>
      <IconButton
        icon="chevron-down"
        iconColor={theme.colors.secondary}
        size={20}
        onPress={() => console.log('Pressed')}
      />
    </>
  );

  const currencyValueMaunt = (
    <>
      <IconButton
        icon="currency-brl"
        iconColor={theme.colors.secondary}
        size={30}
        onPress={() => console.log('Pressed')}
      />
      <Text style={headerStyles.currencyValueText}>{currencyValue}</Text>
    </>
  );

  const icon = (
    <TouchableRipple
      onPress={openSearchPage}
      rippleColor="rgba(0, 0, 0, .32)">
      <MaterialCommunityIcons
        name="magnify"
        size={30}
        style={headerStyles.touchRipple}
      />
    </TouchableRipple>
  );

  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.userContent}>
        <View style={headerStyles.userImage}>
          <Avatar.Image
            size={45}
            source={require('../../../../assets/images/shane-stagner-z0u91lkc_Bw-unsplash.jpg')}
          />
        </View>
        <View style={headerStyles.searchBarContainer}>
          <Searchbar
            icon={() => icon}
            theme={theme.colors.secondary}
            inputStyle={{
              color: theme.colors.secondary,
              paddingVertical: 0,
              fontSize: 18,
              marginTop: -5,
            }}
            elevation={1}
            onPress={openSearchPage}
            style={headerStyles.searchBar}
          />
        </View>
        <TouchableOpacity>
          <Avatar.Icon
            size={40}
            icon='bell'
            style={headerStyles.bell}
          />
        </TouchableOpacity>
      </View>
      <View style={headerStyles.currencyLabelContainer}>
        {currencyLabelMount}
      </View>
      <View style={headerStyles.currencyValueContainer}>
        {currencyValueMaunt}
      </View>
      <View style={headerStyles.addValueContainer}>
        <Text style={headerStyles.addValueText}>Total disponível</Text>
      </View>

      <TouchableOpacity style={headerStyles.button}>
        <Text style={headerStyles.buttonText}>Adicionar quantia</Text>
      </TouchableOpacity>

      <Modal
        visible={isSearchPageVisible}
        animationType="slide"
        onRequestClose={closeSearchPage}
      >
        <SearchPage theme={theme} closeSearchPage={closeSearchPage} />
      </Modal>
    </View>
  );
};

export default Header;
