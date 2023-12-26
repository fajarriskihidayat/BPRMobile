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

const ListProduct = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  const deleteProduct = async id => {
    try {
      await api.delete(`products/${id}`);

      ToastAndroid.show('Hapus data berhasil', ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
    }
  };

  const listProducts = async () => {
    try {
      const {data} = await api.get('products/all');
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listProducts();
  }, [products]);

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
              List Produk
            </Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.tableHead}>
            <View style={[styles.tableHeader, {marginRight: 10}]}>
              <Text style={styles.thText}>No</Text>
            </View>
            <View style={[styles.tableHeader, {marginRight: 116}]}>
              <Text style={styles.thText}>Nama Produk</Text>
            </View>
            <View style={[styles.tableHeader, {marginRight: 10}]}>
              <Text style={styles.thText}>Aksi</Text>
            </View>
          </View>
          {products.map((data, i) => (
            <View style={styles.tableBody} key={i}>
              <View style={styles.tableRow}>
                <View
                  style={[styles.rowWrap, {marginRight: 40, marginLeft: 15}]}>
                  <Text style={styles.rowText}>{i + 1}</Text>
                </View>
                <View style={[styles.rowWrap, {width: 228}]}>
                  <Text style={styles.rowText}>{data.nama}</Text>
                </View>
                <View
                  style={[
                    styles.rowWrap,
                    {marginRight: 20, flexDirection: 'row'},
                  ]}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'orange',
                      padding: 4,
                      borderRadius: 2,
                      marginRight: 2,
                    }}
                    onPress={() =>
                      navigation.navigate('EditProduct', {
                        id: data.id,
                        name: data.nama,
                      })
                    }>
                    <Icon name="pencil" size={20} color={'white'} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'red',
                      padding: 4,
                      borderRadius: 2,
                    }}
                    onPress={async () => await deleteProduct(data.id)}>
                    <Icon name="trash-can" size={20} color={'white'} />
                  </TouchableOpacity>
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

export default ListProduct;
