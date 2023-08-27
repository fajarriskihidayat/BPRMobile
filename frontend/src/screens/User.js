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
import AsyncStorage from '@react-native-async-storage/async-storage';

const User = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.navbar}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.body}>
<<<<<<< HEAD
        <Text style={styles.username}>@Andi07</Text>
            <Image source={ProfileP} style={styles.profilePicture} />
        <Text style={styles.name}>Andisyah</Text>
        <View style={styles.role}>
        <Icon name="account-outline" color={'grey'} size={24} />
        <Text style={styles.secondary}>
        Calon Nasabah
      </Text>
      </View>
        <View style={styles.role}>
        <Icon name="circle-medium" color={'lime'} size={24} />
        <Text style={[styles.secondary,{color:'lime'}]}>
        Online
      </Text>
      </View>
=======
>>>>>>> 983c41814e3aa24658fba3d23262ef65ba89f683
          <Image source={ProfileP} style={styles.profilePicture} />
        </View>
        <View style={styles.form}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.textButton}>Masuk Admin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogout} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textLogout}>Logout</Text>
            </TouchableOpacity>
            </View>
    </ScrollView>
    </View>
  );
};

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
    body : {
        alignItems : 'center',
        marginTop : 20
    },
    navbar : {
      backgroundColor : '#fc5453',
      height : 50,
      paddingLeft : 20,
      flexDirection : 'row',
      paddingVertical : 10,
    },
    
    form : {
        marginHorizontal : 45,
        marginTop : 5
      },
        button: {
            width: 300,
            height: 50,
            backgroundColor: '#fc5453',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop : 20
        },
        textButton: {
            color: '#FFF',
            fontSize: 18,
            fontWeight : '700'
        },
        formText : {
            marginTop : 5,
            marginBottom : 4
        },
        Text : {
            color : '#323333',
            fontWeight : '600',
            fontSize : 16,
        },
        btnLogout: {
            width: 300,
            height: 50,
            backgroundColor: 'white',
            borderColor : '#a1a1a1',
            borderWidth : 2, 
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop : 20,
            marginBottom : 40,
        },
        textLogout: {
            color: '#323333',
            fontSize: 15,
        },
        profilePicture : {
            width : 150,
            height : 150,
        },
        username : {
          fontSize : 18,
          marginBottom : 10,
          fontWeight : '600',
          color : '#393985'
        },
        name : {
          fontSize : 30,
          fontWeight : '800',
          color : '#393985'
        },
        role : {
          flexDirection : 'row',
          marginTop : 5
        },
        secondary : {
          fontSize : 15,
          color : 'grey',
          fontWeight: '500',
          
      },
})

export default User;
