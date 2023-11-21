// MainScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ARScene from './ARScene';

const MainScreen = ({ navigation }) => {
  const goToARScreen = () => {
    navigation.navigate('ARScreen');
  };

  // Dummy product data (replace with your actual product data)
  const product = {
    name: 'Sample Product',
    size: 'Medium',
    price: '$19.99',
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>{product.name}</Text>
        <Text style={styles.cardText}>{`Size: ${product.size}`}</Text>
        <Text style={styles.cardText}>{`Price: ${product.price}`}</Text>
        <Button title="View in AR" onPress={goToARScreen} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardText: {
    color: '#1F1F1F',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MainScreen;
