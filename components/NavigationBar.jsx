// NavigationBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainScreen from "./MainScreen";

const NavigationBar = ({ navigation }) => {
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('MainScreen')}
      >
        <Icon name="home" size={24} color="#757575" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Icon name="person" size={24} color="#757575" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,  // Add a slight grey color border at the top
    borderTopColor: '#E0E0E0',  // Adjust the color as needed
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    color: '#757575',  // Slightly grey text color
    fontSize: 12,
  },
});

export default NavigationBar;
