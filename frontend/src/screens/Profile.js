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
  } from 'react-native'
  import React, { useState, useEffect } from 'react'
  import Office from '../assets/DBS.png'
  import Profil from '../assets/Profile.png'
  import Logo from '../assets/Logo.png'
  import { useNavigation } from '@react-navigation/native'
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  const navigation = useNavigation();
  return (
<View style={styles.container}>
    <ScrollView>
      <View style={styles.navbar}>
      <Image source={Logo} style={styles.logo}/>
      </View>
      <Image source={Profil} style={styles.Profile}/>
      <View style={styles.body}>
      <Text style={styles.title}>
        PT BPR Dana Bintan Sejahtera
      </Text>
      <View style={styles.location}>
        <Icon name="map-marker" color={'#fc5453'} size={24} />
        <Text style={styles.secondary}>
        Jl. Merdeka no.5
      </Text>
      </View>
      <Text style={styles.definition}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      </Text>
      <Text style={styles.title1}>Produk Unggulan</Text>
      <View style={styles.cardArea}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={[styles.productCard, styles.elevation]} 
        onPress={() => navigation.navigate('Detail')}
        >
        <Image source={Office} style={styles.Office}/>              
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
        <Image source={Office} style={styles.Office}/>              
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
        <Image source={Office} style={styles.Office}/>              
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
      <View style={styles.visimisi}>
        <View style={[styles.interest, styles.primContainer]}>
          <Text style={styles.secondText}>Visi</Text>
        </View>
        <Text style={styles.definition}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        </Text>
        <View style={[styles.interest, styles.primContainer]}>
          <Text style={styles.secondText}>Misi</Text>
        </View>
        <Text style={styles.definition}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        </Text>
      </View>
      <View style={styles.lokasi}>
      <Text style={styles.title1}>Kantor pusat dan cabang</Text>
        <View style={[styles.locCard,styles.elevation]}>
          <View style={styles.locArea}>
            <View style={styles.locIcon}>
              <Icon name="office-building" color={'white'} size={40} />
            </View>
            <View style={styles.locText}>
              <Text style={[styles.title1,{fontSize:20,marginBottom:3}]}>Kantor Pusat</Text>
              <View style={{flexDirection: 'row'}}>
              <Icon name="map-marker" color={'#fc5453'} size={20} />
                <Text style={{}}>
                Jl. Merdeka no.5, Tanjungpinang
              </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.locCard,styles.elevation]}>
          <View style={styles.locArea}>
            <View style={styles.locIcon}>
              <Icon name="office-building" color={'white'} size={40} />
            </View>
            <View style={styles.locText}>
              <Text style={[styles.title1,{fontSize:20,marginBottom:3}]}>Kantor Cabang</Text>
              <View style={{flexDirection: 'row'}}>
              <Icon name="map-marker" color={'#fc5453'} size={20} />
                <Text style={{}}>
                Jl. Hangjebat, Kijang
              </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor: 'white',
    },
    logo : {
      width : 270,
      height : 20,
      marginTop : 5
    },
    navbar : {
      backgroundColor : '#fc5453',
      height : 50,
      paddingLeft : 20,
      flexDirection : 'row',
      paddingVertical : 10,
    },
    Profile : {
        width : '100%',
        height : 150,
    },
    location : {
        flexDirection : 'row',
        paddingTop : 10
    },
    title : {
        fontSize : 22,
        fontWeight : '700',
        color : '#393985'
    },
    title1 : {
      fontWeight : '700',
      color : '#393985',
      fontSize : 17
    },
    body : {
        paddingHorizontal : 25,
        paddingTop : 10
    },

    secondary : {
        fontSize : 15,
        color : 'grey',
        fontWeight: '500'
    },
    definition : {
        marginVertical : 20,
        textAlign : 'justify',
        marginRight : 20
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
        marginRight : 15
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
    visimisi : {
      marginVertical : 20,
    },
    primContainer : {
      width : 70,
      alignItems : 'center'
    },
    secondText : {
      fontWeight : '700',
      color : 'white'
    },
    lokasi : {
      marginBottom : 130
    },
    locCard : {
      marginTop : 20,
      borderRadius : 20,
      height : 80,
      paddingVertical : 8,
      paddingHorizontal : 10,
    },
    locArea : {
      flexDirection : 'row',
    },
    locIcon : {
      backgroundColor : '#393985',
      width : 65,
      height : 65,
      borderRadius : 50,
      alignItems : 'center',
      justifyContent : 'center'
    },
    locText : {
      paddingVertical : 5,
      paddingLeft : 10
    }
})


export default Profile