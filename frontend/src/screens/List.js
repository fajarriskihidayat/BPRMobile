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
import reactNativeHtmlToPdf from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

  const generatePdf = async () => {
    const results = await reactNativeHtmlToPdf.convert({
      html: `<style>
        table, th, td {
          border: 1px solid black;
          border-collapse: collapse;
          padding: 8px;
        }
      </style>
      <a href="https://ibb.co/tD94qVm"><img src="https://i.ibb.co/DQZt90V/Logo.png" alt="Logo" width=400 /></a>
      <h1 style="text-align: center; margin-top: 60px; color: #393985">Data Calon Nasabah</h1>
      <table style="width:100%;">
        <tr style="background-color: #fc5453; color: #fff">
          <th>No</th>
          <th>Username</th>
          <th>Nama</th>
          <th>No. HP</th>
        </tr>
        ${users
          .map(
            (data, i) => `
          <tr key=${i}>
            <td style="text-align:center">${i + 1}</td>
            <td>${data.username}</td>
            <td>${data.nama}</td>
            <td>${data.no_hp}</td>
          </tr>
        `,
          )
          .join('')}
      </table>`,
      fileName: 'Data_Calon_Nasabah',
      base64: true,
    });

    // const file = await reactNativeHtmlToPdf.convert(options);
    // console.log(file);
    await RNPrint.print({filePath: results.filePath});
  };

  useEffect(() => {
    listUser();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.navbar}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.header}>
          <Image source={Office} style={styles.image} />
          <View style={styles.conTitle}>
            <Text Text style={styles.title}>
              List User
            </Text>
            <TouchableOpacity style={styles.btn} onPress={generatePdf}>
              <Icon name="printer" size={20} color={'#fff'} />
              <Text style={styles.btnText}>Cetak</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.tableHead}>
            <View style={[styles.tableHeader, {marginRight: 10}]}>
              <Text style={styles.thText}>No</Text>
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
  conTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#fc5453',
    height: 36,
    paddingHorizontal: 16,
    borderRadius: 4,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
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
