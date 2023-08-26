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

const Dashboard = () => {
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '8%', value: 8},
    {label: '10%', value: 10},
  ]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.header}>
        <Text Text style={styles.title}>
          Welcome, Ferry
        </Text>
        <Image source={Office} style={styles.image} />
      </View>
      <View style={styles.body}>
        <Text Text style={styles.primary}>
          Suku bunga Saat ini
        </Text>
        <View style={styles.interestBox}>
          <View style={styles.interest}>
            <Text style={{fontWeight: '700', color: 'white'}}>10%</Text>
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
            style={[styles.naviButton, styles.elevation]}
            onPress={() => navigation.navigate('Atur')}>
            <Icon name="water-percent" color={'grey'} size={68} />
            <Text style={{fontWeight: '500'}}>Atur Suku Bunga</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.naviButton, styles.elevation]}
            onPress={() => navigation.navigate('AddProduct')}>
            <Icon name="plus-box-multiple-outline" color={'grey'} size={58} />
            <Text style={{fontWeight: '500', marginTop: 5}}>Tambah Produk</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DashboardAreaTop}>
          <TouchableOpacity
            style={[styles.naviButton, styles.elevation]}
            onPress={() => navigation.navigate('Reset')}>
            <Icon name="lock-open-outline" color={'grey'} size={58} />
            <Text style={{fontWeight: '500', marginTop: 5}}>
              Reset Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.naviButton, styles.elevation]}
            onPress={() => navigation.navigate('List')}>
            <Icon name="account-details-outline" color={'grey'} size={58} />
            <Text style={{fontWeight: '500'}}>List User</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
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
});

export default Dashboard;
