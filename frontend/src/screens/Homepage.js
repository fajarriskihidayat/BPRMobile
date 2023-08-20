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
import Simulation from '../assets/Simulation.png';
import Logo from '../assets/Logo.png';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.navbar}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to,</Text>
          <Text style={styles.title}>BPR Dana Bintan Sejahtera</Text>
          <Image source={Office} style={styles.image} />
          <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.buttonNaviHome}>
              <Icon name="water-percent" color={'white'} size={48} />
              <Text style={styles.textNaviHome}>Simulasi Kredit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNaviHome}>
              <Icon name="piggy-bank-outline" color={'white'} size={48} />
              <Text style={styles.textNaviHome}>Simulasi Tabungan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNaviHome}>
              <Icon name="camera-timer" color={'white'} size={40} />
              <Text style={styles.textNaviHome}>Simulasi Deposito</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bodyPage}>
          <Text style={styles.title}>Simulasi Kredit</Text>
          <Image source={Simulation} style={styles.image} />
          <Text style={styles.descText}>
            Penyediaan dana kepada perorangan/pengusaha/profesi untuk membiayai
            kebutuhan dana pembelian rumah kebutuhan konsumtif. Pencairan
            pinjaman dilakukan sekaligus, sedangkan pelunasan pinjaman diangsur
            sesuai dengan jadwal angsuran yang telah ditetapkan.
          </Text>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonText}>Coba Sekarang</Text>
          </TouchableOpacity>
          <View style={styles.product}></View>
          <Text style={styles.title}>Produk Unggulan</Text>
        </View>
      <View style={styles.bodyPage}>
        <Text style={styles.title1}>Simulasi Kredit</Text>
        <Image source={Simulation} style={styles.image}/>
        <Text style={styles.descText}>Penyediaan dana kepada perorangan/pengusaha/profesi untuk membiayai kebutuhan dana pembelian rumah kebutuhan konsumtif.</Text>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Coba Sekarang</Text>
        </TouchableOpacity>

        <Text style={styles.title1}>Produk Unggulan</Text>
      <View style={styles.cardArea}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={[styles.productCard, styles.elevation]}>
        <Image source={Office} style={styles.Office1}/>              
            <Text style={styles.cardText}>Kredit Pemilikan Rumah</Text>
            <View style={styles.lowerCard}>
              <View style={{flexDirection:'row'}}>
              <Icon name="file-percent-outline" color={'grey'} size={19} />
              <Text style={{marginLeft:5}}>Kredit</Text>
              </View>
              <View style={styles.interest}>
                <Text style={{fontWeight:'700',color:'white'}}>10%</Text>
              </View>
            </View>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.productCard, styles.elevation]}>
        <Image source={Office} style={styles.Office1}/>              
            <Text style={styles.cardText}>Kredit Pemilikan Rumah</Text>
            <View style={styles.lowerCard}>
              <View style={{flexDirection:'row'}}>
              <Icon name="file-percent-outline" color={'grey'} size={19} />
              <Text style={{marginLeft:5}}>Kredit</Text>
              </View>
              <View style={styles.interest}>
                <Text style={{fontWeight:'700',color:'white'}}>10%</Text>
              </View>
            </View>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.productCard, styles.elevation]}>
        <Image source={Office} style={styles.Office1}/>              
            <Text style={styles.cardText}>Kredit Pemilikan Rumah</Text>
            <View style={styles.lowerCard}>
              <View style={{flexDirection:'row'}}>
              <Icon name="file-percent-outline" color={'grey'} size={19} />
              <Text style={{marginLeft:5}}>Kredit</Text>
              </View>
              <View style={styles.interest}>
                <Text style={{fontWeight:'700',color:'white'}}>10%</Text>
              </View>
            </View>
        </TouchableOpacity>
        </ScrollView>
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
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontWeight: '800',
    fontSize: 21,
  },
  buttonArea: {
    flexDirection: 'row',
    marginTop: 20,
  },
  image: {
    marginTop: 20,
  },
  buttonNaviHome: {
    backgroundColor: '#fc5453',
    width: 113,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 10,
  },
  textNaviHome: {
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
    marginTop: 7,
  },
  bodyPage: {
    paddingLeft: 20,
    marginTop: 20,
  },
  descText: {
    paddingRight: 20,
    marginTop: 20,
  },
  buttonPrimary: {
    backgroundColor: '#fc5453',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 10,
    width: 160,
    marginTop: 20,
  },
  product: {
    marginTop: 20,
    marginBottom: 200,
  },
  buttonText: {
    color: 'white',
    fontWeight: '800',
  },
  
  Office1 : {
    marginTop : 10,
    width : 180,
    height : 80,
},
  title : {
    fontWeight : '800',
    fontSize : 21
  },
  buttonArea : {
    flexDirection : 'row',
    marginTop : 20
  },
  image : {
    marginTop : 20,
  },
  buttonNaviHome : {
    backgroundColor : '#fc5453',
    width : 113,
    height : 100,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 20,
    marginRight : 10

  },
  textNaviHome : {
    color : 'white',
    fontWeight : '500',
    fontSize : 12,
    marginTop : 7,
  },
  bodyPage : {
    paddingLeft : 20,
    marginTop : 20,
    marginBottom : 100
  },
  descText : {
    paddingRight : 20,
    marginTop : 20
  },
  buttonPrimary : {
    backgroundColor : '#fc5453',
    alignItems : 'center',
    borderRadius : 20,
    paddingVertical : 10,
    width : 160,
    marginTop : 20
  },
  product : {
    marginTop : 20,
    marginBottom : 200
  },
  buttonText : {
    color : 'white',
    fontWeight : '800',
  },
  elevation: {
    elevation: 1.5,
    shadowColor: 'black',
  },
  cardText : {
    marginTop : 10,
    fontSize : 18,
    fontWeight : '700',
    color : '#393985'
  },
  lowerCard : {
    marginTop : 15,
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  interest : {
    backgroundColor : '#fc5453',
    borderRadius : 20,
    paddingHorizontal : 10,
    paddingVertical : 5,
  },
  title1 : {
    fontWeight : '700',
    color : '#393985',
    fontSize : 17,
    marginTop : 20
  },
  cardArea : {
    flexDirection : 'row'
},
productCard : {
    borderRadius : 15,
    // borderWidth : 1,
    // borderColor : 'black',
    width : 200,
    height : 200,
    paddingHorizontal : 10,
    marginVertical : 10,
    marginRight : 15,
},
Office : {
    marginTop : 10,
    width : 180,
    height : 80,
},
elevation: {
  elevation: 1.5,
  shadowColor: 'black',
},
});

export default Homepage

