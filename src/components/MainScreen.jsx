import React, { useState } from 'react';
import { View, ScrollView, Text, Button, Image, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import NavigationBar from './NavigationBar';
import DetailScreen from './DetailPage';
import DetailScreenChair from './DetailPageChair';
import DetailScreenCabinet from './DetailPageCabinet';
import DetailScreenOfficeChair from './DetailPageOfficeChair';

const MainScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(null);

  const handleSearch = () => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const filtered = products.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerCaseSearchText) ||
        item.size.toLowerCase().includes(lowerCaseSearchText) ||
        item.price.includes(lowerCaseSearchText)
    );
    setFilteredProducts(filtered);
  };

  const clearSearch = () => {
    setSearchText('');
    setFilteredProducts(null);
  };

  const goToDetailScreen = () => {
    navigation.navigate('DetailScreen');
  };

  const goToDetailScreenChair = () => {
    navigation.navigate('DetailScreenChair');
  };

  const goToDetailScreenCabinet = () => {
    navigation.navigate('DetailScreenCabinet');
  };

  const goToDetailScreenOfficeChair = () => {
    navigation.navigate('DetailScreenOfficeChair');
  };
  
  const products = [
    {
      id: '1',
      name: 'Pillow Sofa',
      size: 'Medium',
      price: 'Rp 800.000',
      imageSource: require('.././assets/Chair/pillowsofa.jpg'),
      productPage: goToDetailScreen,
    },
    {
      id: '2',
      name: 'Gaming Chair',
      size: 'Medium',
      price: 'Rp. 900.000',
      imageSource: require('.././assets/glbchair/gaming.jpg'),
      productPage: goToDetailScreenChair
    },
    {
      id: '3',
      name: 'Cabinet',
      size: 'Small',
      price: 'Rp 300.000',
      imageSource: require('.././assets/Chair/cabinet.jpg'),
      productPage: goToDetailScreenCabinet
    },
    {
      id: '4',
      name: 'Office Chair',
      size: 'Medium',
      price: 'Rp 400.000',
      imageSource: require('.././assets/Chair/officeChair.jpg'),
      productPage: goToDetailScreenOfficeChair
    }
  ];

  const renderProductCard = ({ item }) => (
    <View>
      <TouchableOpacity style={styles.card} onPress={item.productPage}>
        <Image source={item.imageSource} style={styles.cardImage} />
        <Text style={styles.cardText}>{item.name}</Text>
        <Text style={styles.cardTextBold}>{`Size: ${item.size}`}</Text>
        <Text style={styles.cardTextPrice}>{`Price: ${item.price}`}</Text>
        </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search furniture"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearButton} onPress={clearSearch}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Clear</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts || products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderProductCard}
        contentContainerStyle={styles.flatListContainer}
      />
      <NavigationBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: 40
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  searchContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#38767B',
    borderRadius: 8,
    padding: 10,
  },
  clearButton: {
    marginLeft: 10,
    backgroundColor: '#FF6347',
    borderRadius: 8,
    padding: 10,
  },
  card: {
    width: 170, // Set a fixed width for the cards
    height: 220,
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    //elevation: 1,
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
    marginBottom: 4,
  },
  cardTextBold: {
    //fontWeight: 'bold',
    color: '#757575',
    fontSize: 14,
    marginBottom: 4,
  },
  cardTextPrice: {
    fontWeight: 'bold',
    color: '#FF8F45',
    fontSize: 14,
    marginBottom: 4,
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
