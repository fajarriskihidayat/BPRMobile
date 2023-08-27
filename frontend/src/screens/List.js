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

const List = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);

  const listUser = async () => {
    try {
      const {data} = await api.get('users/all');
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listUser();
  }, []);

  console.log('users', users);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.navbar}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.header}>
          <Image source={Office} style={styles.image} />
          <Text Text style={[styles.title, {marginTop: 20}]}>
            List User
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.tableHead}>
            <View style={[styles.tableHeader, {marginRight: 10}]}>
              <Text style={styles.thText}>Id</Text>
            </View>
            <View style={[styles.tableHeader, {marginRight: 20}]}>
              <Text style={styles.thText}>Username</Text>
            </View>
            <View style={[styles.tableHeader, {marginRight: 40}]}>
              <Text style={styles.thText}>Nama</Text>
            </View>
            <View style={[styles.tableHeader, {marginRight: 10}]}>
              <Text style={styles.thText}>No. HP</Text>
            </View>
          </View>
          {users.map((data, i) => (
            <View style={styles.tableBody} key={i}>
              <View style={styles.tableRow}>
                <View
                  style={[styles.rowWrap, {marginRight: 40, marginLeft: 15}]}>
                  <Text style={styles.rowText}>{i + 1}</Text>
                </View>
                <View style={[styles.rowWrap, {marginRight: 50}]}>
                  <Text style={styles.rowText}>{data.username}</Text>
                </View>
                <View style={[styles.rowWrap, {marginRight: 20}]}>
                  <Text style={styles.rowText}>{data.nama}</Text>
                </View>
                <View style={[styles.rowWrap, {marginRight: 10}]}>
                  <Text style={styles.rowText}>{data.no_hp}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
  tableHead: {
    flexDirection: 'row',
  },
  tableHeader: {
    backgroundColor: '#fc5453',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  thText: {
    color: 'white',
    fontWeight: '600',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  rowText: {
    fontSize: 16,
  },
});

export default List;
