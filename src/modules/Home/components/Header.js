import React, { useEffect, useRef, useState } from 'react';
import {View, StyleSheet, Text, Keyboard, TextInput} from 'react-native';
import { Button, Avatar, Searchbar, TouchableRipple, IconButton } from 'react-native-paper';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const user = "Angelo Gatz"
const currencyLabel = "US Dollar"
const currencyValue = "200.000.000"

const Header = ({ theme }) => {

  const [ searchValue, setSearchValue] = useState(null)

  useEffect(() => {
    removeInputFocus()
  }, [Keyboard]);

  function removeInputFocus() {
    Keyboard.addListener('keyboardWillHide', () => {
      Keyboard.dismiss()
    })
  }

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
      color: theme.colors.secondary
    },
    userName: {
      margin: 15,
      fontSize: 25,
      fontFamily: 'Roboto_400Regular',
      color: theme.colors.secondary,
      fontWeight: '100'
    },
    currencyLabelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      top: 30,
      right: -10
    },
    currencyLabelText: {
      fontSize: 18,
      color: theme.colors.secondary,
      fontWeight: '200',
      marginRight: -10,
      marginLeft: -5
    },
    currencyValueText: {
      fontSize: 35,
      color: theme.colors.secondary,
      fontWeight: '600',
      marginLeft: -5
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
      height: 45
    },
    currencyValueContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      top: 20,
    },
    touchRipple: {
      color: theme.colors.secondary
    },
  });

  const currencyLabelMount = (
    <>
      <IconButton
        icon="flag-variant"
        iconColor={theme.colors.secondary}
        size={20}
        onPress={() => console.log('Pressed')}
      />
      <Text style={headerStyles.currencyLabelText}>
        {currencyLabel}
      </Text>
      <IconButton
        icon="chevron-down"
        iconColor={theme.colors.secondary}
        size={20}
        onPress={() => console.log('Pressed')}
      />
    </>
  )

  const currencyValueMaunt = (
    <>
      <IconButton
        icon="currency-brl"
        iconColor={theme.colors.secondary}
        size={30}
        onPress={() => console.log('Pressed')}
      />
      <Text style={headerStyles.currencyValueText}>
        {currencyValue}
      </Text>
    </>
  )

  const icon = (
    <TouchableRipple
    onPress={() => Keyboard.dismiss()}
    rippleColor="rgba(0, 0, 0, .32)"
    >
      <MaterialCommunityIcons name="magnify" size={30} style={headerStyles.touchRipple}/>
    </TouchableRipple> 
  )

  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.userContent}>
        <View style={headerStyles.userImage}>
          <Avatar.Image
            size={45}
            source={require('../../../assets/images/shane-stagner-z0u91lkc_Bw-unsplash.jpg')}
          />
        </View>
        <View style={headerStyles.searchBarContainer}>
          <Searchbar
            onChangeText={(e) => setSearchValue(e)}
            value={searchValue}
            icon={() => icon}
            theme={theme.colors.secondary}
            inputStyle={{
              color: theme.colors.secondary,
              paddingVertical: 0,
              fontSize: 18,
              marginTop: -5
            }}
            onClearIconPress={() => Keyboard.dismiss()}
            elevation={1}
            style={headerStyles.searchBar}
          />
        </View>
      </View>
      <View style={headerStyles.currencyLabelContainer}>
        {currencyLabelMount}
      </View>
      <View style={headerStyles.currencyValueContainer}>
        {currencyValueMaunt}
      </View>
    </View>
  )
};


export default Header;
