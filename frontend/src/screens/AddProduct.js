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
import ProfileP from '../assets/user.png'
import Logo from '../assets/Logo.png'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';

const AddProduct = () => {
  const navigation = useNavigation();
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: '8%', value: 8},
      {label: '10%', value: 10}
    ]);
  return (
    <View style={styles.container}>
    <View style={styles.navbar}>
    <Image source={Logo} style={styles.logo}/>
    </View>
    <View style={styles.header}>
      <Image source={Office} style={styles.image} />
      <Text Text style={[styles.title, {marginTop : 20}]}>Tambah Produk</Text>
    </View>
    <View style={styles.body}>
    <Text style={styles.formText}>Plafond Kredit</Text>
         <TextInput
         style={[styles.input, styles.elevation]}
         placeholder ="Plafond Kredit"
         placeholderTextColor={'#969595'}
        //  onChangeText={(plafond) => setPlafond(plafond)}
        //  value={plafond}
         />
      <Text style={styles.formText}>Plafond Kredit</Text>
        <DropDownPicker
      open={open}
      value={value}
      onSelectItem={(bunga) => setBunga(bunga)}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholderStyle={{
          color: "grey",
        }}
      style={[styles.dropDown, styles.elevation]}
      placeholder="Pilih kategori" 
        />
        <Text style={styles.formText}>Plafond Kredit</Text>
         <TextInput
         style={[styles.input, styles.elevation]}
         placeholder ="Plafond Kredit"
         placeholderTextColor={'#969595'}
        //  onChangeText={(plafond) => setPlafond(plafond)}
        //  value={plafond}
         />

      <TouchableOpacity style={styles.button}>
          <Text style={{fontWeight:'700',color:'white'}}>Ubah</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecond}>
          <Text style={{fontWeight:'700',color:'grey'}}>Back</Text>
      </TouchableOpacity>
      </View>
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
  body : {
      marginTop : 20,
      paddingHorizontal : 20
  },
  navbar : {
    backgroundColor : '#fc5453',
    height : 50,
    paddingLeft : 20,
    flexDirection : 'row',
    paddingVertical : 10,
  },
  header: {
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    title: {
      fontWeight: '800',
      fontSize: 21,
    },
    secondary : {
      fontWeight : '300',
      marginTop : 10
    },
    image: {
      marginTop: 20,
      height : 100,
      borderRadius : 20
    },
    input : {
      height : 50,
      borderRadius : 10,
      paddingHorizontal : 10,
      fontSize : 17,
      fontWeight : '300',
      marginVertical : 10,
      color : 'black',
      marginBottom : 15
    },
    dropDown : {
      marginBottom : 20,
      borderWidth : 0,
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
      marginVertical : 10,
  },
    buttonSecond: {
      height: 50,
      borderWidth : 2,
      borderColor : 'grey',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical : 10,
  },
  })

export default AddProduct