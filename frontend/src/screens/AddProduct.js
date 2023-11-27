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
import api from '../api';

const AddProduct = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    nama: '',
    jenis: '',
    bunga: 0,
    deskripsi: '',
    syarat: '',
    manfaat: '',
    url: '',
  });

  function capitalFirstWord(str) {
    let besar = str.slice(0, 1).toUpperCase();
    let kecil = str.slice(1);

    return besar + kecil;
  }

  const handleAddProduct = async () => {
    try {
      const res = await api.post('products', {
        nama: data.nama,
        jenis: data.jenis,
        suku_bunga: data.bunga,
        deskripsi: data.deskripsi,
        syarat: data.syarat,
        manfaat: data.manfaat,
        img_url: data.url,
      });

      if (res.data.status === 200) {
        ToastAndroid.show('Produk berhasil ditambahkan', ToastAndroid.SHORT);
        navigation.replace('Dashboard');
      }
    } catch (error) {
      ToastAndroid.show('Gagal tambah produk', ToastAndroid.SHORT);
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.header}>
          <Image source={Office} style={styles.image} />
          <Text Text style={[styles.title, {marginTop: 20}]}>
            Tambah Produk
          </Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.formText}>Nama Produk</Text>
          <TextInput
            style={[styles.input, styles.elevation]}
            placeholder="Plafond Kredit"
            placeholderTextColor={'#969595'}
            onChangeText={v => setData({...data, nama: v})}
          />
          <Text style={styles.formText}>Jenis Produk</Text>
          <TextInput
            style={[styles.input, styles.elevation]}
            placeholder="Plafond Kredit"
            placeholderTextColor={'#969595'}
            onChangeText={v => setData({...data, jenis: capitalFirstWord(v)})}
          />
          <Text style={styles.formText}>Suku Bunga</Text>
          <TextInput
            style={[styles.input, styles.elevation]}
            placeholder="Plafond Kredit"
            placeholderTextColor={'#969595'}
            keyboardType="numeric"
            onChangeText={v => setData({...data, bunga: v})}
          />
          <Text style={styles.formText}>Deskripsi</Text>
          <TextInput
            style={[styles.input, styles.elevation]}
            placeholder="Plafond Kredit"
            placeholderTextColor={'#969595'}
            onChangeText={v => setData({...data, deskripsi: v})}
          />
          <Text style={styles.formText}>Syarat</Text>
          <TextInput
            style={[styles.input, styles.elevation]}
            placeholder="Plafond Kredit"
            placeholderTextColor={'#969595'}
            onChangeText={v => setData({...data, syarat: v})}
          />
          <Text style={styles.formText}>Manfaat</Text>
          <TextInput
            style={[styles.input, styles.elevation]}
            placeholder="Plafond Kredit"
            placeholderTextColor={'#969595'}
            onChangeText={v => setData({...data, manfaat: v})}
          />
          <Text style={styles.formText}>URL Foto</Text>
          <TextInput
            style={[styles.input, styles.elevation]}
            placeholder="Plafond Kredit"
            placeholderTextColor={'#969595'}
            onChangeText={v => setData({...data, url: v})}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={async () => await handleAddProduct()}>
            <Text style={{fontWeight: '700', color: 'white'}}>Tambah</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSecond}
            onPress={() => navigation.goBack()}>
            <Text style={{fontWeight: '700', color: 'grey'}}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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

export default AddProduct;
