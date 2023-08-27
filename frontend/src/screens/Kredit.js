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
import Logo from '../assets/Logo.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';
import Office from '../assets/DBS.png';
import api from '../api';

const Kredit = () => {
  const [bunga, setBunga] = React.useState('');
  const [plafond, setPlafond] = React.useState('');
  const [tenor, setTenor] = React.useState('');
  const [angsuran, setAngsuran] = React.useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const getKredit = async () => {
    try {
      const {data} = await api.get(`products/all`);
      const result = data.data.map(data => {
        return {
          label: data.nama,
          value: data.nama,
        };
      });
      setItems(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getKredit();
  }, []);

  const result = async data => {
    let plafond = data.plafond;
    let tenor = data.tenor;
    let hasil =
      (parseInt(plafond) +
        parseInt(plafond) * ((data.value / 100) * (parseInt(tenor) / 12))) /
      parseInt(tenor);
    // console.log("angsuran per bulan = ", Math.round(hasil));
    let hasill = Math.round(hasil);
    setAngsuran(hasill);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.body}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.textTitle}>Simulasi Kredit</Text>
        </View>
        <Image source={Office} style={styles.image} />
        <Text style={styles.formText}>Jenis Kredit</Text>
        <DropDownPicker
          open={open}
          value={value}
          onSelectItem={bunga => setBunga(bunga)}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholderStyle={{
            color: 'grey',
          }}
          style={[styles.dropDown, styles.elevation]}
          placeholder="Pilih kategori"
        />

        <Text style={styles.formText}>Plafond Kredit</Text>
        <TextInput
          style={[styles.input, styles.elevation]}
          placeholder="Plafond Kredit"
          placeholderTextColor={'#969595'}
          onChangeText={plafond => setPlafond(plafond)}
          value={plafond}
        />

        <Text style={styles.formText}>Tenor/Jangka Waktu</Text>
        <TextInput
          style={[styles.input, styles.elevation]}
          placeholder="Tenor"
          placeholderTextColor={'#969595'}
          onChangeText={tenor => setTenor(tenor)}
          value={tenor}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            result({
              value: value,
              plafond: plafond,
              tenor: tenor,
            });
            setModalVisible(true);
          }}>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 18}}>
            Hitung
          </Text>
        </TouchableOpacity>
        <Modal
          isVisible={isModalVisible}
          animationIn="slideInUp"
          animationOut="zoomOut"
          animationOutTiming={300}
          backdropTransitionOutTiming={200}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textSuccess}>Submit Success</Text>
              <View style={{marginVertical: 20}}>
                <Text>Jenis Kredit : </Text>
                <Text>Plafond Kredit : Rp. {plafond}</Text>
                <Text>Jangka Waktu : {tenor} Bulan</Text>
                <Text>Angsuran per bulan : Rp. {angsuran}</Text>
              </View>
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={toggleModal}>
                <Text style={styles.btnCloseText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  navbar: {
    backgroundColor: '#fc5453',
    height: 50,
    paddingLeft: 20,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  header: {
    paddingLeft: 20,
    paddingTop: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 27,
  },
  body: {
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fc5453',
    height: 45,
    borderRadius: 15,
    marginTop: 20,
  },
  image: {
    width: 330,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
  },
  formText: {
    fontSize: 15,
    fontWeight: '300',
    color: 'black',
    marginTop: 20,
  },
  textTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: 'black',
  },
  elevation: {
    elevation: 1.5,
    shadowColor: 'black',
  },
  input: {
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 17,
    fontWeight: '300',
    marginVertical: 10,
    color: 'black',
  },
  dropDown: {
    marginTop: 10,
    borderWidth: 0,
  },
  modalView: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: '#1dd1a1',
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 20,
    marginVertical: 20,
  },
  btnCloseText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  textSuccess: {
    color: '#1dd1a1',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default Kredit;
