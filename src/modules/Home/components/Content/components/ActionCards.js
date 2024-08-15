import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Button, Card, Text, TouchableRipple} from 'react-native-paper';
import { useGlobalContext } from '../../../../../components/context/globalContext';

const firstIcon = props => (
  <Avatar.Icon {...props} size={44} color={props.color} icon="cash-plus" />
);
const scndIcon = props => (
  <Avatar.Icon {...props} size={44} color={props.color} icon="cash-minus" />
);
const thirdIcon = props => (
  <Avatar.Icon
    {...props}
    size={44}
    color={props.color}
    icon="clipboard-edit-outline"
  />
);

const ActionCards = () => {

  const { theme } = useGlobalContext();

  const actionCardStyle = StyleSheet.create({
    container: {
      flex: 1,
      width: '90%',
      top: -55,
    },
    cardsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
    },
    cardStyle: {
      flex: 1,
      marginHorizontal: 5,
      height: 85,
      backgroundColor: theme.colors.otherWhite,
    },
    firstIcon: {
      flex: 1,
      marginHorizontal: 15,
      top: -5,
      width: 40,
      backgroundColor: '#0077ff',
    },
    secondIcon: {
      flex: 1,
      marginHorizontal: 15,
      top: -5,
      width: 40,
      backgroundColor: '#f3b200',
    },
    thirdIcon: {
      flex: 1,
      marginHorizontal: 15,
      top: -5,
      width: 40,
      backgroundColor: '#f3b200',
    },
    cardText: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: theme.colors.fontColor,
      top: -17,
    },
  });

  return (
    <View style={actionCardStyle.container}>
      <View style={actionCardStyle.cardsContainer}>
        <Card style={actionCardStyle.cardStyle}>
          <Card.Title
            left={() =>
              firstIcon({
                style: actionCardStyle.firstIcon,
                color: theme.colors.secondary,
              })
            }
          />
          <Card.Content>
            <Text style={actionCardStyle.cardText}>Á pagar</Text>
          </Card.Content>
        </Card>
        <Card style={actionCardStyle.cardStyle}>
          <Card.Title
            left={() =>
              scndIcon({
                style: actionCardStyle.secondIcon,
                color: theme.colors.secondary,
              })
            }
          />
          <Card.Content>
            <Text style={actionCardStyle.cardText}>Pago</Text>
          </Card.Content>
        </Card>
        <Card style={actionCardStyle.cardStyle}>
          <Card.Title
            left={() =>
              thirdIcon({
                style: actionCardStyle.thirdIcon,
                color: theme.colors.secondary,
              })
            }
          />
          <Card.Content>
            <Text style={actionCardStyle.cardText}>Cadastrar</Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default ActionCards;
