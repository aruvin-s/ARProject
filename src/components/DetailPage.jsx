import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import ARScreen from './ARScene';
import NavigationBar from './NavigationBar';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const DetailPage = ({ navigation }) => {
  const goToARScreen = () => {
    navigation.navigate('ARScreen');
  };

  const product = {
    name: 'Pillow Sofa',
    size: 'Medium',
    price: 'Rp 800.000',
    imageSource: require('.././assets/Chair/pillowsofa.jpg'),
  };

  const colors = ['#50A9B0', '#FF8F45', '#FEBA49', '#171C31']; // Example colors

  // State to keep track of the selected color
  const [selectedColor, setSelectedColor] = React.useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    // You can add logic here to update the furniture color.
  };

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View>
    <ScrollView style={{backgroundColor: 'white', marginBottom: 60}}>
      <Image source={product.imageSource} style={styles.detailImage} />
      <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={styles.titleText}>{product.name}</Text>
        <TouchableOpacity onPress={toggleFavorite}>
          <Icon name={isFavorite ? 'favorite' : 'favorite-border'} size={24} color="#FF8F45" />
        </TouchableOpacity>
      </View>
        <Text style={{ fontWeight: 'bold', color: '#757575', fontSize: 14, marginBottom: 10, }}>{`Size: ${product.size}`}</Text>
        <Text style={{ fontWeight: 'bold', color: '#FF8F45', fontSize: 14, marginBottom: 10, }}>{`Price: ${product.price}`}</Text>
        <Text style={styles.titleText}>Available colors</Text>
        <View style={styles.colorContainer}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.colorCircle,
                { backgroundColor: color, borderColor: selectedColor === color ? '#38767B' : 'transparent' },
              ]}
              onPress={() => handleColorChange(color)}
            />
          ))}
        </View>
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
        <View style={styles.buttonContent}>
        <Icon name="map" size={24} color="#FFFFFF" />
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Discover nearby shop</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary} onPress={goToARScreen}>
        <View style={styles.buttonContent}>
        <Icon name="view-in-ar" size={24} color="#38767B" />
        <Text style={{ color: '#38767B', textAlign: 'center', fontWeight: 'bold' }}>Try in your place</Text>
        </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
    <NavigationBar navigation={navigation} />
    </View>
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
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  colorCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    margin: 5,
  },
  buttonContent: {
    flexDirection: 'row',  // Align children horizontally
    alignItems: 'center',  // Center children vertically
    justifyContent: 'center',  // Center children horizontally
  }
  
});

export default DetailPage;
