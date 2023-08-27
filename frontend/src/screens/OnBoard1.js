import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Board1 from '../assets/Simulationn.png';
import Board2 from '../assets/Product.png';
import Board3 from '../assets/Company.png';
import Logo from '../assets/Logo.png';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';

const OnBoard1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={Logo} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <Text style={styles.skipButton}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Image source={Board1} style={styles.onBoard} />
        <Text style={styles.title}>Simulasi Kredit</Text>
        <Text style={styles.desc}>
          Memberikan gambaran dan proyeksi angka yang jelas tentang produk
          perbankan dengan metode yang Atraktif{' '}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('OnBoard2')}>
          <Text style={{fontWeight: '700', color: 'white'}}>Next</Text>
        </TouchableOpacity>
        <View style={styles.paginationGroup}>
          <View
            style={[styles.pagination, {backgroundColor: '#fc5453'}]}></View>
          <View
            style={[styles.pagination, {backgroundColor: 'lightgrey'}]}></View>
          <View
            style={[styles.pagination, {backgroundColor: 'lightgrey'}]}></View>
        </View>
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
    alignItems: 'center',
  },
  navbar: {
    backgroundColor: '#fc5453',
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  skipButton: {
    fontWeight: '400',
    color: 'white',
    marginTop: 5,
  },
  onBoard: {
    width: 300,
    height: 300,
  },
  title: {
    fontWeight: '800',
    fontSize: 30,
  },
  desc: {
    fontWeight: '300',
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginVertical: 20,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#fc5453',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  paginationGroup: {
    flexDirection: 'row',
    marginTop: 20,
  },
  pagination: {
    width: 10,
    height: 10,
    borderRadius: 15,
    marginRight: 15,
  },
});

export default OnBoard1;
