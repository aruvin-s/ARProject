// ShopListPage.js
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const ShopListPage = () => {
  const shops = [
    {
      id: '1',
      name: 'Furniture Shop',
      address: '123 Main St, Cityville',
      latitude: 37.7749, // Replace with actual coordinates
      longitude: -122.4194, // Replace with actual coordinates
      imageSource: require('../assets/Shop/furniture.jpg'),
    },
    {
      id: '2',
      name: 'IKEA',
      address: '123 Main St, Cityville',
      latitude: 37.7749, // Replace with actual coordinates
      longitude: -122.4194, // Replace with actual coordinates
      imageSource: require('../assets/Shop/ikea.jpg'),
    },
  ];

  const handleOpenMaps = (shop) => {
    const coordinates = `${shop.latitude},${shop.longitude}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates}`;
    Linking.openURL(url);
  };

  const renderShopCard = ({ item }) => (
    <View style={styles.shopCard}>
      <Image source={item.imageSource} style={styles.shopImage} />
      <View style={styles.shopInfo}>
        <Text style={styles.shopName}>{item.name}</Text>
        <Text style={styles.shopAddress}>{item.address}</Text>
        <Text style={styles.shopAddress}>Product Stock : 2 pcs</Text>
        <TouchableOpacity style={styles.mapsButton} onPress={() => handleOpenMaps(item)}>
          <Text style={{ color: '#38767B', fontWeight: 'bold' }}>Check on Maps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop List</Text>
      <Text style={styles.subtitle}>Shop your furniture here</Text>
      <FlatList
        data={shops}
        keyExtractor={(item) => item.id}
        renderItem={renderShopCard}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center'
  },
  subtitle: {
    color: '#757575',
    marginBottom: 16,
    textAlign: 'center'
  },
  flatListContainer: {
    paddingBottom: 40,
  },
  shopCard: {
    flexDirection: 'row', // Use flexDirection to arrange image and info horizontally
    alignItems: 'center',
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  shopImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10, // Add margin to separate image from info
  },
  shopInfo: {
    flex: 1, // Allow the info to take remaining space
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'black'
  },
  shopAddress: {
    color: '#757575',
    marginBottom: 4,
  },
  mapsButton: {
    borderRadius: 8,
  },
});

export default ShopListPage;
