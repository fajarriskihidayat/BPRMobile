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
//   import Logo from '../assets/Logo.png'
  import { useNavigation } from '@react-navigation/native'
  import axios from 'axios'
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import DropDownPicker from 'react-native-dropdown-picker';


const Kredit = () => {

  const [bunga,setBunga] = React.useState('');
  const [plafond,setPlafond] = React.useState('');
  const [tenor,setTenor] = React.useState('');

  const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
      const [items, setItems] = useState([
        {label: '8%', value: 8},
        {label: '10%', value: 10}
      ]);

      const result = async(data) => {
        let plafond = data.plafond;
        let tenor = data.tenor;
        let hasil = (parseInt(plafond) + (parseInt(plafond)*((data.value/100) * (parseInt(tenor)/12))))/parseInt(tenor);
        console.log("angsuran per bulan = ", Math.round(hasil));
      }

  return (
    <View style={styles.container}>
    <View style={styles.navbar}>
        <Icon name="account-cash-outline" color={'white'} size={30} />
        <Text style={styles.cashlogo}>Cash Flow</Text>
        </View>
        <View style={styles.body}>
        <DropDownPicker
      open={open}
      value={value}
      onSelectItem={(bunga) => setBunga(bunga)}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.dropDown}
      placeholder="Pilih kategori"      
        />

      <Text style={styles.formText}>Plafond Kredit</Text>
         <TextInput
         style={styles.input}
         placeholder ="Plafond Kredit"
         placeholderTextColor={'#969595'}
         onChangeText={(plafond) => setPlafond(plafond)}
         value={plafond}
         />

      <Text style={styles.formText}>Tenor/Jangka Waktu</Text>
         <TextInput
         style={styles.input}
         placeholder ="Tenor"
         placeholderTextColor={'#969595'}
         onChangeText={(tenor) => setTenor(tenor)}
         value={tenor}
         />


        <TouchableOpacity style={styles.button}
          onPress={async () => { result({value : value, plafond : plafond, tenor: tenor})
                    }
                }
        >
          <Text style={{color:'white',fontWeight:'600'}}>Hitung</Text>
        </TouchableOpacity>
        <Text>
        {

        }
        </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor: 'white',
    },
    navbar : {
      backgroundColor : '#eb8d2f',
      height : 50,
      paddingLeft : 20,
      flexDirection : 'row',
      paddingVertical : 10,
    },
    cashlogo :{ 
      fontWeight: '800', 
      color : 'white',  
      marginLeft: 5,
      fontSize : 18
    },
    header : {
      paddingLeft : 20,
      paddingTop : 20,
      flexDirection : 'row',
      marginTop : 20
    },
    logo : {
      width : 120,
      height : 40
    },
    title : {
      color : 'white',
      fontWeight : '700',
      fontSize : 27, 
    },
    body : {
      paddingHorizontal : 30,
      paddingTop : 20,
    },
    button : {
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : '#eb8d2f',
      height : 40,
      borderRadius : 15,
      marginTop : 20
    },
    formText : {
      fontSize : 15,
      fontWeight : '300',
      color : 'black',
      marginTop : 20
    },
    input : {
        height : 50,
        borderWidth : 1,
        backgroundColor : 'lightgrey',
        borderRadius : 10,
        borderWidth : 0,
        paddingHorizontal : 20,
        fontSize : 17,
        fontWeight : '300',
        marginVertical : 10,
        color : 'black'
      },
})

export default Kredit