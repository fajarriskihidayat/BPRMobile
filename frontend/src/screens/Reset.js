import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Office from '../assets/DBS.png';
import Profil from '../assets/Profile.png';
import ProfileP from '../assets/user.png';
import Logo from '../assets/Logo.png';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';

const Reset = () => {
  const navigation = useNavigation();
  const [lama, setLama] = useState('');
  const [baru, setBaru] = useState('');

  const editPassword = async () => {
    try {
      const user = await AsyncStorage.getItem('username');
      const res = await api.put('users', {
        username: user,
        password: lama,
        passwordBaru: baru,
      });

      if (res.data.status === 200) {
        ToastAndroid.show('Password berhasil diubah', ToastAndroid.SHORT);
        navigation.replace('Login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.header}>
        <Image source={Office} style={styles.image} />
        <Text Text style={[styles.title, {marginTop: 20}]}>
          Reset Password
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.formText}>Password lama</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Password lama"
          placeholderTextColor={'#969595'}
          onChangeText={lama => setLama(lama)}
        />
        <Text style={styles.formText}>Password Baru</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Password Baru"
          placeholderTextColor={'#969595'}
          onChangeText={baru => setBaru(baru)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={async () => await editPassword()}>
          <Text style={{fontWeight: '700', color: 'white'}}>Ubah</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSecond}
          onPress={() => navigation.goBack()}>
          <Text style={{fontWeight: '700', color: 'grey'}}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: 270,
    height: 20,
    marginTop: 5,
  },
  body: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  navbar: {
    backgroundColor: '#fc5453',
    height: 50,
    paddingLeft: 20,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontWeight: '800',
    fontSize: 21,
  },
  secondary: {
    fontWeight: '300',
    marginTop: 10,
  },
  image: {
    marginTop: 20,
    height: 100,
    borderRadius: 20,
  },
  input: {
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 17,
    fontWeight: '300',
    marginVertical: 10,
    color: 'black',
    marginBottom: 15,
    backgroundColor: 'white',
    elevation: 1.5,
  },
  dropDown: {
    marginBottom: 20,
    borderWidth: 0,
  },
  elevation: {
    elevation: 1.5,
    shadowColor: 'black',
  },
  button: {
    height: 50,
    backgroundColor: '#fc5453',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonSecond: {
    height: 50,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default Reset;
