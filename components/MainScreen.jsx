import React from 'react';
import { View, ScrollView, Text, Button, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'; // Import Image component
import DetailScreen from './DetailPage';

const MainScreen = ({ navigation }) => {
  const goToDetailScreen = () => {
    navigation.navigate('DetailScreen');
  };

  // Dummy product data (replace with your actual product data)
  const products = [
    {
      id: '1',
      name: 'Harmony Sofa',
      size: 'Medium',
      price: '$19.99',
      imageSource: require('.././assets/sofa.jpg'),
    },
    {
      id: '2',
      name: 'Harmony Sofa',
      size: 'Medium',
      price: '$19.99',
      imageSource: require('.././assets/sofa.jpg'),
    },
    {
      id: '3',
      name: 'Harmony Sofa',
      size: 'Medium',
      price: '$19.99',
      imageSource: require('.././assets/sofa.jpg'),
    },
    {
      id: '4',
      name: 'Harmony Sofa',
      size: 'Medium',
      price: '$19.99',
      imageSource: require('.././assets/sofa.jpg'),
    },
    {
      id: '5',
      name: 'Harmony Sofa',
      size: 'Medium',
      price: '$19.99',
      imageSource: require('.././assets/sofa.jpg'),
    },
    {
      id: '6',
      name: 'Harmony Sofa',
      size: 'Medium',
      price: '$19.99',
      imageSource: require('.././assets/sofa.jpg'),
    },
    // Add more products as needed
  ];

  const renderProductCard = ({ item }) => (
    <View style={styles.card}>
      {/* Display the image */}
      <Image source={item.imageSource} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.name}</Text>
      <Text style={styles.cardTextBold}>{`Size: ${item.size}`}</Text>
      <Text style={styles.cardTextPrice}>{`Price: ${item.price}`}</Text>
      <TouchableOpacity style={styles.buttonPrimary} onPress={goToDetailScreen}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>View Details</Text>
        </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      numColumns={2} // Display two items per row
      renderItem={renderProductCard}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  card: {
    flex: 1,
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 100,
    maxWidth: '100%',
    marginBottom: 10,
    borderRadius: 8,
  },
  cardText: {
    color: '#1F1F1F',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardTextBold: {
    fontWeight: 'bold',
    color: '#757575',
    fontSize: 14,
    marginBottom: 5,
  },
  cardTextPrice: {
    fontWeight: 'bold',
    color: '#FF8F45',
    fontSize: 14,
    marginBottom: 5,
  },
  buttonPrimary: {
    height: 48,
    borderRadius: 8,
    backgroundColor: '#38767B',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonSecondary: {
    height: 48,
    borderRadius: 8,
    borderColor: '#38767B',
    backgroundColor: '#FFFFF',
    borderWidth: 1,
    justifyContent: 'center',
    marginBottom: 10,
  }
});

export default MainScreen;
