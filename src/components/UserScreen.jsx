import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import NavigationBar from './NavigationBar';

const UserScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the current user when the component mounts
    const currentUser = auth().currentUser;
    setUser(currentUser);
  }, []);

  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.navigate('Auth'); // Navigate to your authentication flow (login/signup)
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {user ? (
          <>
            <Image
              source={require('../assets/Shop/furniture.jpg')}
              style={styles.profileImage}
            />
            <Text style={styles.profileText}>{`Welcome, ${user.email}!`}</Text>
          </>
        ) : (
          <Text style={styles.profileText}>Loading user profile...</Text>
        )}
      </View>

      {/* Input fields for user email and username */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="#bcbcbc"
          defaultValue={user ? user.email : ''}
          editable={false} // Make the email field non-editable
        />
      </View>

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogout}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Logout</Text>
      </TouchableOpacity>
      <NavigationBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black'
  },
  inputContainer: {
    width: 320,
    marginTop: 20,
  },
  textInput: {
    width: '100%',
    borderColor: '#1f1f1f',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  buttonPrimary: {
    height: 48,
    width: 72,
    borderRadius: 8,
    backgroundColor: '#38767B',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default UserScreen;
