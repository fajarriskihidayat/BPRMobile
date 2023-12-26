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
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';

const Dashboard = () => {
  const navigation = useNavigation();
  const [bunga, setBunga] = useState(0);
  const [name, setName] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const getKredit = async () => {
    try {
      const user = await AsyncStorage.getItem('name');
      const {data} = await api.get(`products/all`);
      const result = data.data.map(data => {
        return {
          label: data.nama,
          value: data.nama,
        };
      });
      setName(user);
      setItems(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getDetail = async () => {
    try {
      const {data} = await api.get(`products/name/${value}`);
      setBunga(data.data.suku_bunga);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getKredit();
    getDetail();
  }, [value]);

  console.log('value', value);

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.replace('Homepage');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.header}>
        <Text Text style={styles.title}>
          Welcome, {name}
        </Text>
        <Image source={Office} style={styles.image} />
      </View>
      <View style={styles.body}>
        <Text Text style={styles.primary}>
          Suku bunga Saat ini
        </Text>
        <View style={styles.interestBox}>
          <View style={styles.interest}>
            <Text style={{fontWeight: '700', color: 'white'}}>{bunga}%</Text>
          </View>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            dropDownContainerStyle={{
              borderColor: 'lightgrey',
              width: '80%',
              backgroundColor: 'white',
            }}
            placeholderStyle={{
              color: 'grey',
            }}
            style={styles.dropDown}
            placeholder="Pilih kategori"
          />
        </View>
        <View style={styles.DashboardAreaTop}>
          <TouchableOpacity
            style={[styles.naviButton]}
            onPress={() => navigation.navigate('ListProduct')}>
            <Icon name="water-percent" color={'grey'} size={68} />
            <Text style={{fontWeight: '500'}}>List Produk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.naviButton]}
            onPress={() => navigation.navigate('AddProduct')}>
            <Icon name="plus-box-multiple-outline" color={'grey'} size={58} />
            <Text style={{fontWeight: '500', marginTop: 5}}>Tambah Produk</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DashboardAreaTop}>
          <TouchableOpacity
            style={[styles.naviButton]}
            onPress={() => navigation.navigate('Reset')}>
            <Icon name="lock-open-outline" color={'grey'} size={58} />
            <Text style={{fontWeight: '500', marginTop: 5}}>
              Reset Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.naviButton]}
            onPress={() => navigation.navigate('List')}>
            <Icon name="account-details-outline" color={'grey'} size={58} />
            <Text style={{fontWeight: '500'}}>List User</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btnSecondary}
          onPress={() => navigation.replace('Homepage')}>
          <Text style={{fontWeight: '700', color: '#fc5453'}}>Homepage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={{fontWeight: '700', color: 'white'}}>Logout</Text>
        </TouchableOpacity>
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
  primary: {
    fontWeight: '700',
    fontSize: 17,
  },
  interestBox: {
    paddingHorizontal: 20,
    backgroundColor: 'lightgrey',
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    marginVertical: 15,
    zIndex: 100,
    position: 'relative',
  },
  dropDown: {
    width: '80%',
    borderRadius: 20,
    borderWidth: 0,
  },
  interest: {
    backgroundColor: '#fc5453',
    borderRadius: 20,
    alignItems: 'center',
    width: 50,
    justifyContent: 'center',
    marginRight: 10,
  },
  DashboardAreaTop: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  naviButton: {
    width: '47%',
    height: 120,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    backgroundColor: 'white',
    elevation: 3,
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
  },
  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: '#fc5453',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
});

export default Dashboard;
