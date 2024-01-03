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
import Logo from '../assets/Logo.png';
import {useNavigation} from '@react-navigation/native';
import api from '../api';

const EditProduct = ({route}) => {
  const {id, name} = route.params;
  const navigation = useNavigation();
  const [data, setData] = useState({
    id: +id,
    nama: '',
    jenis: '',
    suku_bunga: 0,
    deskripsi: '',
    syarat: '',
    manfaat: '',
    img_url: '',
  });

  function capitalFirstWord(str) {
    let besar = str.slice(0, 1).toUpperCase();
    let kecil = str.slice(1);

    return besar + kecil;
  }

  const editKredit = async () => {
    if (
      !data.nama ||
      !data.jenis ||
      !data.suku_bunga ||
      !data.deskripsi ||
      !data.syarat ||
      !data.manfaat ||
      !data.img_url
    ) {
      return ToastAndroid.show('Data tidak boleh kosong', ToastAndroid.SHORT);
    }

    try {
      const res = await api.put('products', data);

      if (res.data.status === 200) {
        ToastAndroid.show('Data berhasil diubah', ToastAndroid.SHORT);
        navigation.replace('Dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getOne = async () => {
    try {
      const {data} = await api.get(`products/name/${name}`);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOne();
  }, []);

  console.log({data});

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.header}>
          <Image source={Office} style={styles.image} />
          <Text Text style={[styles.title, {marginTop: 20}]}>
            Edit Produk
          </Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.formText}>Nama Produk</Text>
          <TextInput
            style={[styles.input]}
            placeholder="Masukan nama"
            placeholderTextColor={'#969595'}
            onChangeText={v => setData({...data, nama: v})}
            value={data.nama}
          />
          <Text style={styles.formText}>Jenis Produk</Text>
          <TextInput
            style={[styles.input]}
            placeholder="Masukan jenis"
            placeholderTextColor={'#969595'}
            onChangeText={v => setData({...data, jenis: capitalFirstWord(v)})}
            value={data.jenis}
          />
          <Text style={styles.formText}>Suku Bunga</Text>
          <TextInput
            style={[styles.input]}
            placeholder="Masukan suku bunga"
            placeholderTextColor={'#969595'}
            keyboardType="numeric"
            onChangeText={v => setData({...data, suku_bunga: +v})}
            value={data.suku_bunga.toString()}
          />
          <Text style={styles.formText}>Deskripsi</Text>
          <TextInput
            style={[styles.input]}
            placeholder="Masukan deskripsi"
            placeholderTextColor={'#969595'}
            onChangeText={v => setData({...data, deskripsi: v})}
            value={data.deskripsi}
          />
          <Text style={styles.formText}>Syarat</Text>
          <TextInput
            style={[styles.input]}
            placeholder="Masukan syarat"
            placeholderTextColor={'#969595'}
            onChangeText={v => setData({...data, syarat: v})}
            value={data.syarat}
          />
          <Text style={styles.formText}>Manfaat</Text>
          <TextInput
            style={[styles.input]}
            placeholder="Masukan manfaat"
            placeholderTextColor={'#969595'}
            onChangeText={v => setData({...data, manfaat: v})}
            value={data.manfaat}
          />
          <Text style={styles.formText}>URL Foto</Text>
          <TextInput
            style={[styles.input]}
            placeholder="Masukan url"
            placeholderTextColor={'#969595'}
            onChangeText={v => setData({...data, img_url: v})}
            value={data.img_url}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={async () => await editKredit()}>
            <Text style={{fontWeight: '700', color: 'white'}}>Edit</Text>
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

export default EditProduct;
