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

const Deposito = () => {
  const [product, setProduct] = React.useState('');
  const [bunga, setBunga] = React.useState('');
  const [jangka, setJangka] = React.useState('');
  const [plafond, setPlafond] = React.useState('');
  const [angsuran, setAngsuran] = React.useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [openProduct, setOpenProduct] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  const [waktu, setWaktu] = useState(null);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [tenor, setTenor] = useState([
    {label: '1 bulan', value: 1},
    {label: '3 bulan', value: 3},
    {label: '6 bulan', value: 6},
    {label: '12 bulan', value: 12},
  ]);

  const getKredit = async () => {
    try {
      const {data} = await api.get(`products/all`);
      const result = data.data.map(data => {
        setProduct(data.nama);
        return {
          label: data.nama,
          value: data.suku_bunga,
        };
      });
      console.log(items.label);
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
    let bungaTab;

    if (plafond < 100000000) {
      if (tenor == 1) {
        bungaTab = 425;
      } else if (tenor == 3) {
        bungaTab = 45;
      } else if (tenor == 6) {
        bungaTab = 475;
      } else if (tenor == 12) {
        bungaTab = 475;
      }
    } else {
      if (tenor == 1) {
        bungaTab = 525;
      } else if (tenor == 3) {
        bungaTab = 575;
      } else if (tenor == 6) {
        bungaTab = 6;
      } else if (tenor == 12) {
        bungaTab = 6;
      }
    }

    console.log(bungaTab);
    let hasil = (parseInt(plafond) * (parseInt(bungaTab) / 100) * 30) / 366;
    // console.log("angsuran per bulan = ", Math.round(hasil));
    // console.log(data.value);
    let hasill = Math.round(hasil - hasil * 0.2);
    setAngsuran(hasill);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.body}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.textTitle}>Simulasi Deposito</Text>
        </View>
        <Image source={Office} style={styles.image} />
        <Text style={styles.formText}>Jenis Deposito</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Deposito Sejahtera"
          placeholderTextColor={'#494a49'}
          editable={false}
        />

        <Text style={styles.formText}>Penempatan Dana</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Penempatan Dana "
          placeholderTextColor={'#969595'}
          onChangeText={plafond => setPlafond(plafond)}
          value={plafond}
        />

        <Text style={styles.formText}>Jangka Waktu</Text>
        <DropDownPicker
          open={openTime}
          value={waktu}
          onSelectItem={jangka => setJangka(jangka)}
          items={tenor}
          setOpen={setOpenTime}
          setValue={setWaktu}
          setItems={setTenor}
          placeholderStyle={{
            color: 'grey',
          }}
          dropDownContainerStyle={{
            borderColor: 'lightgrey',
            backgroundColor: 'white',
          }}
          style={[styles.dropDown, styles.elevation]}
          placeholder="Pilih Jangka Waktu"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            result({
              value: value,
              plafond: plafond,
              tenor: waktu,
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
              <View style={{marginVertical: 20}}>
                <Text style={styles.textSuccess}>Hasil Simulasi</Text>
                <View style={{marginVertical: 20}}>
                  <View style={styles.simRow}>
                    <Text style={styles.simText}>
                      Jenis Produk Deposito Sejahtera
                    </Text>
                  </View>
                  <View style={styles.simRow}>
                    <Text style={styles.simText}>
                      Penempatan Dana Rp. {plafond}
                    </Text>
                  </View>
                  <View style={styles.simRow}>
                    <Text style={styles.simText}>
                      Jangka Waktu {waktu} Bulan
                    </Text>
                  </View>
                  <View style={styles.resultRow}>
                    <Text style={styles.resultText}>
                      Hasil Deposito : Rp. {angsuran}
                    </Text>
                  </View>
                  <Text style={{fontSize: 10, marginTop: 10}}>
                    *Sudah termasuk pajak
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={toggleModal}>
                  <Text style={styles.btnCloseText}>Ok</Text>
                </TouchableOpacity>
              </View>
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
    backgroundColor: 'white',
    elevation: 1.5,
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
    backgroundColor: '#fc5453',
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
    color: '#fc5453',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  simRow: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  resultRow: {
    backgroundColor: '#fc5453',
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginTop: 20,
    borderRadius: 20,
  },
  simText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  resultText: {
    color: 'white',
    fontWeight: '700',
  },
});

export default Deposito;
