// MainScreen.js
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native'; // Import Image component
import DetailScreen from './DetailPage';

const MainScreen = ({ navigation }) => {
  const goToDetailScreen = () => {
    navigation.navigate('DetailScreen');
  };

  // Dummy product data (replace with your actual product data)
  const product = {
    name: 'Sofa',
    size: 'Medium',
    price: '$19.99',
    // Add an image source (replace 'your_image_source' with the actual source of your image)
    imageSource: require('.././assets/sofa.jpg'), // Example: require('./images/sofa.jpg')
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Display the image */}
        <Image source={product.imageSource} style={styles.cardImage} />
        <Text style={styles.cardText}>{product.name}</Text>
        <Text style={styles.cardText}>{`Size: ${product.size}`}</Text>
        <Text style={styles.cardText}>{`Price: ${product.price}`}</Text>
        <Button title="View Details" onPress={goToDetailScreen} />
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
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImage: {
    width: 300,
    height: 200, // Set a fixed height for the image
    maxWidth: '100%', // Set a maximum width for the image
    marginBottom: 10,
    borderRadius: 8
  },
  cardText: {
    color: '#1F1F1F',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MainScreen;
