import React, { Fragment, useState } from 'react'
import { Dimensions, FlatList, StyleSheet, View } from 'react-native'
import { Avatar, Card, Switch, Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {id: '1', type: 'mode'},
  {id: '2', type: 'info'},
];

const USER_MOCK_DATA = {
  name: 'Angelo A. A. Gatz',
  email: 'angeloagatz@gmail.com',
  phone: '+55(41) 9 8726-5268'
}

const UserScreen = ({ theme, onChangeTheme }) => {
  
  const [isEnabled, setIsEnabled] = useState(false);

  const getIconStyle = type => {
    switch (type) {
      case 'mode':
        return {
          color: theme.colors.fontColor,
          backgroundColor: theme.colors.secondary,
          label: 'Dark Mode',
          icon: 'moon-waning-crescent',
          changeMode: true
        };
      case 'info':
        return {
          color: '#3554ff',
          backgroundColor: '#b8cbff',
          label: 'Cadastro',
          icon: 'account'
        };
      default:
        return {
          color: '#000',
          backgroundColor: theme.colors.otherWhite,
          textColor: '#000',
          label: 'Movimentação',
        };
    }
  };

  function toggleSwitch() {
    setIsEnabled(!isEnabled)
    onChangeTheme(!isEnabled)
  }

  const renderItem = ({item}) => {
    const {color, backgroundColor, changeMode, label, icon} = getIconStyle(
      item.type,
    );
    return (
      <Fragment>
        <View style={styles.itemWrapper}>
          <View style={[styles.iconContainer, {backgroundColor}]}>
            <Icon name={icon} size={24} color={color} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemText}>{label}</Text>
          </View>
          {changeMode ?
            <View style={styles.rightContainer}>
              <Switch
                trackColor={{false: '#9e9e9e', true: '#a5a5a5'}}
                thumbColor={isEnabled ? '#575757' : '#f4f3f4'}
                ios_backgroundColor="#9e9e9e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            :
            <View style={styles.rightContainer}>
              <Icon name="chevron-right" size={24} color="#ccc" />
            </View>
          }
        </View>
      </Fragment>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 7,
      backgroundColor: "transparent",
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 150
    },
    itemContainer: {
      width: Dimensions.get('window').width * 0.9,
      padding: 25,
    },
    itemWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
    },
    wrapper: {
      width: Dimensions.get('window').width * 0.9,
      borderRadius: 15,
      backgroundColor: theme.colors.otherWhite,
      overflow: 'hidden',
    },
    itemContent: {
      flex: 1,
    },
    rightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    amountWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
    amountText: {
      fontSize: 16,
      marginLeft: 5,
    },
    chevronIcon: {
      marginLeft: 10,
    },
    itemText: {
      fontSize: 18,
      color: theme.colors.fontColor
    },
    divider: {
      height: 0.5,
      backgroundColor: '#ddd',
      width: Dimensions.get('window').width * 0.8,
      alignSelf: 'center',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    profileCard: {
      width: Dimensions.get('window').width * 0.9,
      bottom: 15,
    },
    cardContainer: {
      backgroundColor: theme.colors.otherWhite,
      height: 190,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Avatar: {
      bottom: 10,
      alignSelf: 'center'
    },
    userDetails: {
      textAlign: 'center',
    },
    userName: {
      textAlign: 'center',
      fontSize: 22,
      color: theme.colors.fontColor
    },
    userEmail: {
      textAlign: 'center',
      color: theme.colors.fontColor
    },
    usePhone: {
      textAlign: 'center',
      color: theme.colors.fontColor
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Card style={styles.cardContainer}>
          <Avatar.Image
            size={75}
            source={require('../../assets/images/shane-stagner-z0u91lkc_Bw-unsplash.jpg')}
            style={styles.Avatar}
          />
          <View style={styles.userDetails}>
            <Text style={styles.userName}>{USER_MOCK_DATA.name}</Text>
            <Text style={styles.userEmail}>{USER_MOCK_DATA.email}</Text>
            <Text style={styles.usePhone}>{USER_MOCK_DATA.phone}</Text>
          </View>
        </Card>
      </View>
      <View style={styles.wrapper}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default UserScreen