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
import Map from '../assets/Map.png';
import Wa from '../assets/Whatsapp.png';
import Mail from '../assets/Mail.png';
import Web from '../assets/Web.png';
import Logo from '../assets/Logo.png';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Contact = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.navbar}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.body}>
          <Image source={Map} style={styles.imgMap} />
          <Text style={[styles.title, {marginTop: 20}]}>
            PT BPR Dana Bintan Sejahtera
          </Text>
          <View style={styles.location}>
            <Icon name="map-marker" color={'#fc5453'} size={24} />
            <Text style={styles.secondary}>Jl. Merdeka no.5</Text>
          </View>
          <Text style={[styles.title, {marginVertical: 20}]}>Kontak Kami</Text>
          <View style={styles.contact}>
            <Image source={Wa} style={styles.contactIcon} />
            <Text style={styles.contactText}>0823 9297 9518</Text>
          </View>
          <View style={styles.contact}>
            <Image source={Mail} style={styles.contactIcon} />
            <Text style={styles.contactText}>bpr_dbs@yahoo.com</Text>
          </View>
          <View style={styles.contact}>
            <Image source={Web} style={styles.contactIcon} />
            <Text style={styles.contactText}>bprdbs.com</Text>
          </View>
          <TouchableOpacity style={[styles.buttonAjukan, {marginVertical: 20}]}>
            <Text style={styles.secondText}>Call Center</Text>
          </TouchableOpacity>
          <View style={styles.lokasi}>
            <Text style={styles.title1}>Kantor pusat dan cabang</Text>
            <View style={[styles.locCard]}>
              <View style={styles.locArea}>
                <View style={styles.locIcon}>
                  <Icon name="office-building" color={'white'} size={40} />
                </View>
                <View style={styles.locText}>
                  <Text
                    style={[styles.title1, {fontSize: 20, marginBottom: 3}]}>
                    Kantor Pusat
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Icon name="map-marker" color={'#fc5453'} size={20} />
                    <Text style={{}}>Jl. Merdeka no.5, Tanjungpinang</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.locCard]}>
              <View style={styles.locArea}>
                <View style={styles.locIcon}>
                  <Icon name="office-building" color={'white'} size={40} />
                </View>
                <View style={styles.locText}>
                  <Text
                    style={[styles.title1, {fontSize: 20, marginBottom: 3}]}>
                    Kantor Cabang
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Icon name="map-marker" color={'#fc5453'} size={20} />
                    <Text style={{}}>Jl. Hangjebat, Kijang</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
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
  navbar: {
    backgroundColor: '#fc5453',
    height: 50,
    paddingLeft: 20,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imgMap: {
    width: 350,
    height: 200,
    borderRadius: 30,
  },
  location: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#393985',
  },
  secondary: {
    fontSize: 15,
    color: 'grey',
    fontWeight: '500',
  },
  contact: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contactIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  contactText: {
    fontWeight: '400',
    color: '#1c1c1c',
    fontSize: 19,
    marginTop: 3,
  },
  secondText: {
    fontWeight: '700',
    color: 'white',
  },
  buttonAjukan: {
    backgroundColor: '#fc5453',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 50,
  },
  lokasi: {
    marginBottom: 130,
  },
  locCard: {
    backgroundColor: 'white',
    elevation: 1.5,
    marginTop: 20,
    borderRadius: 20,
    height: 80,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  locArea: {
    flexDirection: 'row',
  },
  locIcon: {
    backgroundColor: '#393985',
    width: 65,
    height: 65,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locText: {
    paddingVertical: 5,
    paddingLeft: 10,
  },
  title1: {
    fontWeight: '700',
    color: '#393985',
    fontSize: 17,
  },
  elevation: {
    elevation: 1.5,
    shadowColor: 'black',
  },
});


export default Contact
