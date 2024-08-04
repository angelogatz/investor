import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import { Button, Avatar, Searchbar, TouchableRipple } from 'react-native-paper';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

const user = "Angelo Gatz"

const Header = ({ theme }) => {
  const headerStyles = StyleSheet.create({
    
    container: {
      backgroundColor: theme.colors.primary,
      height: '100%',
      padding: 20,
    },
    userImage: {
      borderColor: '#e3f0ff',
      border: 2,
      width: 50,
      height: 50,
      borderWidth: 2, // Adiciona a borda
      borderColor: theme.colors.secondary, // Define a cor da borda
      borderRadius: 50, // Arredonda a borda
    },
    userContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    userName: {
      margin: 15,
      fontSize: 25,
      fontFamily: 'Roboto_400Regular',
      color: theme.colors.secondary
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
  });

  return (
    <ImageBackground
      source={require('../../../assets/images/backgroudStandard.jpg')}
      style={headerStyles.backgroundImage}
    >
      <View style={headerStyles.container}>
        <View style={headerStyles.userContent}>
          <View style={headerStyles.userImage}>
            <Avatar.Image
              size={45}
              source={require('../../../assets/images/shane-stagner-z0u91lkc_Bw-unsplash.jpg')}
            />
          </View>
          <View >
            <Text style={headerStyles.userName}>
              Olá! {user}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
};


export default Header;
