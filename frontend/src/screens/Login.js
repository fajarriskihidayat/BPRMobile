import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Office from '../assets/DBS.png';
import api from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('users/login', {
        username: username,
        password: password,
      });

      if (response.data.status == 200) {
        ToastAndroid.show('Login success', ToastAndroid.SHORT);
        await AsyncStorage.setItem('password', password);
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('name', response.data.user.nama);
        navigation.replace('Homepage');
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show(
        'Cek kembali username dan password',
        ToastAndroid.SHORT,
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={Main} resizeMode="cover"> */}
      <View style={styles.body}>
        <Text style={styles.title1}>Login ke akunmu!</Text>
        <Image source={Office} style={styles.Illustration} />
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#323333"
          onChangeText={username => setUsername(username)}
          value={username}
        />
        <Text style={styles.formText}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#323333"
          onChangeText={password => setPassword(password)}
          value={password}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            if (!username || !password) {
              ToastAndroid.show('Data tidak boleh kosong', ToastAndroid.SHORT);
            } else {
              await handleLogin();
            }
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.lowerText}>
          Belum punya akun? 
          <Text
            style={{fontWeight: 'bold', color: '#fc5453'}}
            onPress={() => navigation.replace('Register')}>
            Daftar disini
          </Text>
        </Text>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Logo: {
    width: 110,
    height: 30,
  },
  body: {
    alignItems: 'center',
    marginTop: 20,
  },
  Illustration: {
    marginVertical: 25,
    width: 300,
    height: 120,
  },
  title1: {
    fontSize: 27,
    fontWeight: '700',
    color: '#323333',
    marginTop: 20,
  },
  form: {
    // marginTop : 30,
    marginHorizontal: 50,
  },
  formText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#323333',
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#e0e0e0',
    //   borderColor : '#BABABA',
    borderRadius: 10,
    borderWidth: 0,
    paddingHorizontal: 20,
    fontSize: 17,
    fontWeight: '300',
    marginVertical: 15,
  },
  footer: {
    alignItems: 'center',
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#fc5453',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lowerText: {
    color: '#323333',
    fontSize: 16,
    marginTop: 20,
  },
});

export default Login;
