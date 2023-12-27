import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useState} from 'react';
import { Login } from '../services/Auth';

const LoginScreen = ({navigation}) => {
  const handleLinkPress = () => {
    navigation.navigate('Sign Up');
  };
  const loginHandler = () => {
    Login(email, password, navigation)
  }

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [passwordBtn, setPasswordBtn] = useState(true);

  return (
    <View style={style.container}>
      <View>
        <View style={style.textContainer}>
          <Text style={{fontSize: 24, fontWeight: '800', color: '#1f1f1f'}}>
            Welcome <Text style={{color: '#FF8F45'}}>Back!</Text>
          </Text>
          <Text style={{color: '#757575', fontWeight: '400'}}>
            Login to find your suitable furniture
          </Text>
        </View>
        <View style={style.formContainer}>
          <TextInput
            style={style.textInput}
            placeholder="Email"
            placeholderTextColor="#bcbcbc"
            defaultValue={email}
            onChangeText={text => setEmail(text)}
            />
          <View style={style.passwordInput}>
            <TextInput
              style={{width: '90%', fontSize: 16}}
              placeholder="Password"
              placeholderTextColor="#bcbcbc"
              secureTextEntry={passwordBtn}
              defaultValue={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity onPress={() => setPasswordBtn(!passwordBtn)}>
              <Icon
                name={passwordBtn ? 'visibility' : 'visibility-off'}
                size={24}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={style.button} onPress={() => loginHandler()}>
          <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 4,
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>Are new here?</Text>
        <TouchableOpacity>
          <Text
            style={{fontSize: 16, color: '#38767B', fontWeight: 800}}
            onPress={handleLinkPress}>
            Sign Up here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  textContainer: {
    marginTop: 24,
    flex: 0,
    alignItems: 'center',
    gap: 6,
    height: 'fit',
  },
  formContainer: {
    width: 320,
    marginTop: 36,
    flex: 0,
    gap: 20,
  },
  textInput: {
    width: 320,
    borderColor: '#1f1f1f',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  passwordInput: {
    borderColor: '#1f1f1f',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontSize: 16,
    flex:0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    width: 320,
    marginTop: 24,
    padding: 12,
    backgroundColor: '#38767B',
    borderRadius: 12,
    flex: 0,
    alignItems: 'center',
  },
});

export default LoginScreen;
