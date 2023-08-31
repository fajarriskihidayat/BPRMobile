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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import api from '../api';

const AturBunga = () => {
  const navigation = useNavigation();
  const [bunga, setBunga] = React.useState('');
  const [sukuBunga, setSukuBunga] = useState(0);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const getKredit = async () => {
    try {
      const {data} = await api.get(`products/all`);
      const result = data.data.map(data => {
        return {
          label: data.nama,
          value: data.nama,
        };
      });
      setItems(result);
    } catch (error) {
      console.log(error);
    }
  };

  const editKredit = async () => {
    try {
      const res = await api.put('products', {
        nama: value,
        suku_bunga: sukuBunga,
      });

      if (res.data.status === 200) {
        ToastAndroid.show('Data berhasil diubah', ToastAndroid.SHORT);
        navigation.replace('Dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getKredit();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.header}>
        <Image source={Office} style={styles.image} />
        <Text Text style={[styles.title, {marginTop: 20}]}>
          Atur Suku Bunga
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.formText}>Jenis Produk</Text>
        <DropDownPicker
          open={open}
          value={value}
          onSelectItem={bunga => setBunga(bunga)}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholderStyle={{
            color: 'grey',
          }}
          style={[styles.dropDown, styles.elevation]}
          placeholder="Pilih kategori"
        />

        <Text style={styles.formText}>Suku Bunga</Text>
        <TextInput
          style={[styles.input, styles.elevation]}
          placeholder="Suku Bunga"
          placeholderTextColor={'#969595'}
          onChangeText={bunga => setSukuBunga(bunga)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={async () => await editKredit()}>
          <Text style={{fontWeight: '700', color: 'white'}}>Ubah</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecond}>
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
  },
  dropDown: {
    marginTop: 10,
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

export default AturBunga;
