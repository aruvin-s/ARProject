import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const Regis = (email, password, navigation) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      navigation.navigate('UserScreen');
    })
    .catch(err => {
      if (err.code === 'auth/email-already-in-use') {
        Alert.alert(
          'Warning the Email',
          'That email address is already in use!',
          [{text: 'OK'}],
        );
      }
      if (err.code === 'auth/invalid-email') {
        Alert.alert('Warning the Email', 'That email address is invalid!', [
          {text: 'OK'},
        ]);
      }
      Alert.alert('Error!', err, [{text: 'OK'}]);
      console.log(email + ' ' + password + ' ' + err);
    });
};

const Login = (email, password, navigation) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      navigation.navigate('decatalog');
    })
    .catch(err => {
      if (err.code == "auth/invalid-credential") {
        Alert.alert(
          'Warning the Email',
          'That email address is incorrect or has expired',
          [{text: 'OK'}],
        );
      }
      if (err.code === 'auth/invalid-email') {
        Alert.alert('Warning the Email', 'That email address is invalid!', [
          {text: 'OK'}
        ]);
      }
      // Alert.alert('Error!', err, [{text: 'OK'}]);
      // console.log(email + ' ' + password + ' ' + err.code);
    });
};

export {Regis, Login};
