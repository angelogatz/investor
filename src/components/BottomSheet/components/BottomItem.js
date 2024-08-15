import React, {Fragment} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import { useGlobalContext } from '../../context/globalContext';
import { useNavigation } from '@react-navigation/native';

const bottomIcon = props => (
  <Avatar.Icon {...props} size={48} color={props.color} icon={props.icon} />
);

const BottomItem = ({id, value}) => {

  const navigation = useNavigation();

  const { theme, setScreen, screen } = useGlobalContext();

  const getItemAttrs = value => {
    switch (value) {
      case 'home':
        return {
          icon: 'home',
          active: Boolean(screen === '/home'),
        };
      case 'activity':
        return {
          icon: 'check-network-outline',
          active: Boolean(screen === '/activity'),
        };
      case 'profile':
        return {
          icon: 'human',
          active: Boolean(screen === '/profile'),
        };
    }
  };

  function screenSelection(url) {
    setScreen(`/${url}`);
    navigation.navigate(`/${url}`)
  }

  const {active, icon} = getItemAttrs(value);

  const bottomItemStyle = StyleSheet.create({
    bottomIcon: {
      flex: 1,
      width: 40,
      backgroundColor: 'transparent',
    },
    cardsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'transparent',
      border: 'none',
      shadowColor: 'transparent',
      top: active ? 25 : 0,
    },
    dot: {
      fontSize: 45,
      color: theme.colors.primary,
      left: 30.5,
      bottom: 60,
    },
  });

  return (
    <Fragment>
        <View style={bottomItemStyle.container} key={id}>
          <Card style={bottomItemStyle.cardsContainer}>
            <TouchableOpacity onPress={() => screenSelection(value)}>
              <Card.Title
                left={() =>
                  bottomIcon({
                    style: bottomItemStyle.bottomIcon,
                    color: theme.colors.primary,
                    icon: icon,
                  })
                }
              />
            </TouchableOpacity>
            {active && <Text style={bottomItemStyle.dot}>.</Text>}
          </Card>
        </View>
      <View></View>
    </Fragment>
  );
};

export default BottomItem;
