import React, {Fragment} from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {id: '1', type: 'register', amount: '4.000'},
  {id: '2', type: 'entry', amount: '1.000'},
  {id: '3', type: 'spent', amount: '3.000'},
  {id: '4', type: 'entry', amount: '600'},
  {id: '5', type: 'register', amount: '410'},
  {id: '6', type: 'register', amount: '4,00'},
  {id: '7', type: 'spent', amount: '50'},
  {id: '8', type: 'entry', amount: '737'},
  {id: '9', type: 'register', amount: '100'},
  {id: '10', type: 'spent', amount: '1.200'},
];

const getIconStyle = type => {
  switch (type) {
    case 'entry':
      return {
        color: '#0077ff',
        backgroundColor: '#cce0ff',
        textColor: '#4CAF50',
        label: 'Entrada',
        icon: 'cash-plus',
      };
    case 'spent':
      return {
        color: '#f34d00',
        backgroundColor: '#f3b200',
        textColor: '#f28b82',
        label: 'Saída',
        icon: 'cash-minus',
      };
    case 'register':
      return {
        color: '#f39200',
        backgroundColor: '#f7b900',
        textColor: '#ce93d8',
        label: 'Cadastro',
        icon: 'clipboard-edit-outline',
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

const Activity = ({theme}) => {
  const renderItem = ({item}) => {
    const {color, backgroundColor, textColor, label, icon} = getIconStyle(
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
          <View style={styles.rightContainer}>
            <View style={styles.amountWrapper}>
              <Icon name="currency-usd" size={18} color={textColor} />
              <Text style={[styles.amountText, {color: textColor}]}>
                {item.amount}
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color={theme.colors.fontColor}/>
          </View>
        </View>
      </Fragment>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 7,
      backgroundColor: theme.colors.secondary,
      alignItems: 'center',
      paddingBottom: 20,
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
      marginBottom: 110,
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
      backgroundColor: theme.colors.fontColor,
      width: Dimensions.get('window').width * 0.8,
      alignSelf: 'center',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      alignSelf: 'flex-start',
      color: theme.colors.fontColor
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Atividades</Text>
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
  );
};

export default Activity;
