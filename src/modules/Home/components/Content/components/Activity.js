import React, { Fragment } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importa os ícones

const data = [
  { id: '1', type: 'register', amount: '4.000',title: 'Item 1', icon: 'clipboard-edit-outline' },
  { id: '2', type: 'entry', amount: '1.000',title: 'Item 2', icon: 'cash-plus' },
  { id: '3', type: 'spent', amount: '3.000',title: 'Item 3', icon: 'cash-minus' },
  { id: '4', type: 'entry', amount: '600',title: 'Item 4', icon: 'cash-plus' },
  { id: '5', type: 'register', amount: '410',title: 'Item 5', icon: 'clipboard-edit-outline' },
  { id: '6', type: 'register', amount: '4,00',title: 'Item 6', icon: 'clipboard-edit-outline' },
  { id: '7', type: 'spent', amount: '50',title: 'Item 7', icon: 'cash-minus' },
  { id: '8', type: 'entry', amount: '737',title: 'Item 8', icon: 'cash-plus' },
  { id: '9', type: 'register', amount: '100',title: 'Item 9', icon: 'clipboard-edit-outline' },
  { id: '10', type: 'spent', amount: '1.200',title: 'Item 10', icon: 'cash-minus' },
];

const getIconStyle = (type) => {
  switch (type) {
    case 'entry':
      return { color: '#0077ff', backgroundColor: '#cce0ff', textColor: '#4CAF50' }; // Azul e verde suave
    case 'spent':
      return { color: '#f34d00', backgroundColor: '#f3b200', textColor: '#f28b82' }; // Laranja e vermelho suave
    case 'register':
      return { color: '#f39200', backgroundColor: '#f7b900', textColor: '#ce93d8' }; // Laranja e lilás suave
    default:
      return { color: '#000', backgroundColor: '#fff', textColor: '#000' }; // Cor padrão
  }
};

const Activity = ({ theme }) => {
  const renderItem = ({ item }) => {
    const { color, backgroundColor, textColor } = getIconStyle(item.type);
    return (
      <Fragment>
        <View style={styles.itemWrapper}>
          {/* Ícone do lado esquerdo */}
          <View style={[styles.iconContainer, { backgroundColor }]}>
            <Icon name={item.icon} size={24} color={color} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
          {/* Contêiner de alinhamento à direita */}
          <View style={styles.rightContainer}>
            <View style={styles.amountWrapper}>
              <Icon name="currency-usd" size={18} color={textColor} />
              <Text style={[styles.amountText, { color: textColor }]}>{item.amount}</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#ccc" />
          </View>
        </View>
      </Fragment>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 7,
      backgroundColor: theme.colors.secondary,
      alignItems: 'center', // Centraliza os itens da lista
      paddingBottom: 20,
    },
    itemContainer: {
      width: Dimensions.get('window').width * 0.9, // 90% da largura da tela
      padding: 25,
      // Remove a curvatura dos cards
    },
    itemWrapper: {
      flexDirection: 'row', // Alinha ícone e conteúdo horizontalmente
      alignItems: 'center', // Alinha verticalmente
      padding: 10,
    },
    wrapper: {
      width: Dimensions.get('window').width * 0.9, // 90% da largura da tela
      borderRadius: 15, // Adiciona curvatura ao container principal
      backgroundColor: '#fff', // Fundo branco para a curvatura ser visível
      overflow: 'hidden', // Garante que a curvatura afete todo o conteúdo
      marginBottom: 90,
    },
    itemContent: {
      flex: 1, // Ocupa o espaço restante para empurrar os itens da direita
    },
    rightContainer: {
      flexDirection: 'row', // Alinha o ícone de cifrão e o valor horizontalmente
      alignItems: 'center',
      justifyContent: 'flex-end', // Alinha tudo à direita
    },
    amountWrapper: {
      flexDirection: 'row', // Alinha o ícone de cifrão e o valor horizontalmente
      alignItems: 'center',
      marginRight: 10, // Espaçamento entre o valor e o chevron
    },
    amountText: {
      fontSize: 16,
      marginLeft: 5,
    },
    chevronIcon: {
      marginLeft: 10, // Espaçamento entre o valor e o chevron
    },
    itemText: {
      fontSize: 18,
    },
    divider: {
      height: 0.5, // Define a altura do divisor
      backgroundColor: '#ddd',
      width: Dimensions.get('window').width * 0.8, 
      alignSelf: 'center',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      alignSelf: 'flex-start'
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
