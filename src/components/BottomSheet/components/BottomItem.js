import React, {Fragment} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Card} from 'react-native-paper';

const bottomIcon = props => (
  <Avatar.Icon {...props} size={48} color={props.color} icon={props.icon} />
);

const BottomItem = ({id, name, value, theme, url, onChange}) => {
  const getItemAttrs = value => {
    switch (value) {
      case 'home':
        return {
          icon: 'home',
          active: Boolean(url === '/home'),
        };
      case 'activity':
        return {
          icon: 'check-network-outline',
          active: Boolean(url === '/activity'),
        };
      case 'profile':
        return {
          icon: 'human',
          active: Boolean(url === '/profile'),
        };
    }
  };

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
            <TouchableOpacity onPress={() => onChange(value)}>
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
