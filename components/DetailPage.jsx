import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import ARScreen from './ARScene';

const { width, height } = Dimensions.get('window');

const DetailPage = ({ navigation }) => {
  const goToARScreen = () => {
    navigation.navigate('ARScreen');
  };

  const product = {
    name: 'Harmony Sofa',
    size: 'Medium',
    price: '$19.99',
    imageSource: require('.././assets/sofa.jpg'),
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Image source={product.imageSource} style={styles.detailImage} />
      <View style={styles.container}>
        <Text style={styles.titleText}>{product.name}</Text>
        <Text style={{ fontWeight: 'bold', color: '#757575', fontSize: 14, marginBottom: 10, }}>{`Size: ${product.size}`}</Text>
        <Text style={{ fontWeight: 'bold', color: '#FF8F45', fontSize: 14, marginBottom: 10, }}>{`Price: ${product.price}`}</Text>
        <Text style={styles.titleText}>Available colors</Text>
        <Text style={styles.titleText}>About this product</Text>
        <Text style={styles.descText}>Product Material : Solid Wood</Text>
        <Text style={styles.descText}>
          Introducing the Harmony Sofa, where style meets comfort seamlessly.
          Immerse yourself in luxury with its plush, velvety upholstery and deep cushions,
          creating a haven of relaxation. The Harmony Sofa's sleek design, available in various sophisticated colors,
          effortlessly complements any decor. Crafted with precision and durability, this sofa is a timeless addition to
          your living space, promising both style and comfort in one exquisite piece.
          Elevate your home with the perfect blend of sophistication and relaxation the Harmony Sofa.
        </Text>
        <TouchableOpacity style={styles.buttonPrimary} onPress={goToARScreen}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Discover Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary} onPress={goToARScreen}>
          <Text style={{ color: '#38767B', textAlign: 'center', fontWeight: 'bold'  }}>Try in your place</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  detailImage: {
    width: width,
    height: height / 3,
    maxWidth: '100%',
    maxHeight: '100%',
    marginBottom: 10,
  },
  titleText: {
    color: '#1F1F1F',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descText: {
    color: '#1F1F1F',
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 10,
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
  },
});

export default DetailPage;
