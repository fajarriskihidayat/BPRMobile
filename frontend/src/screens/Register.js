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
import api from '../api/index';

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [nama, setNama] = useState('');
  const [noHp, setNoHp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegis = async () => {
    try {
      const response = await api.post('users', {
        username: username,
        nama: nama,
        no_hp: noHp,
        email: email,
        password: password,
      });

      if (response.data.status == 200) {
        ToastAndroid.show('Sign Up Success', ToastAndroid.SHORT);
        navigation.replace('Login');
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show('Cek kembali data pendaftaran', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={Poster} resizeMode="cover"> */}
      <View style={styles.body}>
        <Text style={styles.title1}>Make an new account</Text>
        {/* <Image source={Illustration} style={styles.Illustration}/> */}
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Nama</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama"
          placeholderTextColor="#58565e"
          onChangeText={nama => setNama(nama)}
          value={nama}
        />
        <Text style={styles.formText}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#58565e"
          onChangeText={username => setUsername(username)}
          value={username}
        />
        <Text style={styles.formText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#58565e"
          onChangeText={email => setEmail(email)}
          value={email}
        />
        <Text style={styles.formText}>No. Hp</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="No. Hp"
          placeholderTextColor="#58565e"
          onChangeText={noHp => setNoHp(noHp)}
          value={noHp}
        />
        <Text style={styles.formText}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#58565e"
          onChangeText={password => setPassword(password)}
          value={password}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            if (!nama || !username || !noHp || !email || !password) {
              ToastAndroid.show('Data tidak boleh kosong', ToastAndroid.SHORT);
            } else {
              await handleRegis();
            }
          }}>
          <Text style={styles.buttonText}>Buat Akun</Text>
        </TouchableOpacity>
        <Text style={styles.lowerText}>
          Already have an account? 
          <Text
            style={{fontWeight: 'bold', color: '#fc5453'}}
            onPress={() => navigation.replace('Login')}>
            Sign In here
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
  topBar: {
    backgroundColor: '#443C68',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 60,
  },
  Logo: {
    width: 110,
    height: 30,
  },
  body: {
    alignItems: 'center',
  },
  Illustration: {
    marginTop: 25,
    width: 170,
    height: 180,
  },
  title1: {
    fontSize: 27,
    fontWeight: '700',
    color: '#323333',
    marginTop: 40,
  },
  form: {
    marginTop: 30,
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
    color: '#323333',
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

export default Register;
