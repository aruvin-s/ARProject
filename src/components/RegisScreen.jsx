import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useState} from 'react';
import { Regis } from '../services/Auth';

const Register = ({navigation}) => {
  const handleLinkPress = () => {
    navigation.navigate('Login');
  };

  const signupHandler = () => {
    return Regis(email, confPassword, navigation)
  };

  const [email, setEmail] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [passBtn, getPassBtn] = useState(true);
  const [confPassBtn, getConfPassBtn] = useState(true);

  return (
    <View style={style.container}>
      <View>
        <View style={style.textContainer}>
          <Text style={{fontSize: 24, fontWeight: '800', color: '#1f1f1f'}}>
            Get <Text style={{color: '#50A9B0'}}>Started</Text> in{' '}
            <Text style={{color: '#FF8F45'}}>seconds</Text>
          </Text>
          <Text style={{color: '#757575', fontWeight: '400'}}>
            Login to find your suitable furniture
          </Text>
        </View>
        {/* <Text>{email != null && email}</Text> */}
        <View style={style.formContainer}>
          <TextInput
            style={style.textInput}
            placeholder="Email"
            placeholderTextColor="#bcbcbc"
            defaultValue={email}
            onChangeText={input => setEmail(input)}
          />
          <TextInput
            style={style.textInput}
            placeholder="Username"
            placeholderTextColor="#bcbcbc"
          />
          <View style={style.passwordInput}>
            <TextInput
              style={{width: '90%', fontSize: 16}}
              placeholder="Password"
              placeholderTextColor="#bcbcbc"
              secureTextEntry={passBtn}
            />
            <TouchableOpacity onPress={() => getPassBtn(!passBtn)}>
              <Icon
                name={passBtn ? 'visibility' : 'visibility-off'}
                size={24}
              />
            </TouchableOpacity>
          </View>
          <View style={style.passwordInput}>
            <TextInput
              style={{width: '90%', fontSize: 16}}
              placeholder="Confirm Password"
              placeholderTextColor="#bcbcbc"
              secureTextEntry={confPassBtn}
              defaultValue={confPassBtn}
              onChangeText={input => setConfPassword(input)}
            />
            <TouchableOpacity onPress={() => getConfPassBtn(!confPassBtn)}>
              <Icon
                name={confPassBtn ? 'visibility' : 'visibility-off'}
                size={24}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={style.button} onPress={() => signupHandler()}>
          <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>
            Sign Up
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
        <Text style={{fontSize: 16}}>Already have an account?</Text>
        <TouchableOpacity>
          <Text
            style={{fontSize: 16, color: '#38767B', fontWeight: 800}}
            onPress={handleLinkPress}>
            Login here
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
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
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

export default Register;
