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

const AturBunga = () => {
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
      <Text Text style={styles.title}>Welcome, Ferry</Text>
      <Image source={Office} style={styles.image} />
    </View>
    <View style={styles.body}>
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
  })

export default AturBunga