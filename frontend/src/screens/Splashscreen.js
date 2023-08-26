import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/LogoNew.png'
import { useNavigation } from '@react-navigation/native'

const Splashscreen = () => {
    const navigation = useNavigation();
    setTimeout(() => {
        navigation.replace('OnBoard1');
      }, 3000)
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fc5453',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo : {
        width : 270,
        height : 80
    },
    

})

export default Splashscreen