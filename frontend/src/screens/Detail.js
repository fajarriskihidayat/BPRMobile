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
import Logo from '../assets/Logo.png';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../api';

const Detail = ({navigation, route}) => {
  const {nama} = route.params;
  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState({});

  const getDetail = async () => {
    try {
      const {data} = await api.get(`products/name/${nama}`);
      setDetail(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const {data} = await api.get('products/all');
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.navbar}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.body}>
          <Image source={{uri: `${detail.img_url}`}} style={styles.image} />
          <Text style={styles.title}>{detail.nama}</Text>
          <View style={styles.catWrap}>
            <Icon name="file-percent-outline" color={'grey'} size={23} />
            <Text style={{marginLeft: 7, fontSize: 18}}>{detail.jenis}</Text>
          </View>
          <Text style={styles.definition}>{detail.deskripsi}</Text>
          <View style={styles.visimisi}>
            <View style={[styles.interest, styles.primContainer]}>
              <Text style={styles.secondText}>Syarat</Text>
            </View>
            <Text style={styles.definition}>{detail.syarat}</Text>
            <View style={[styles.interest, styles.primContainer]}>
              <Text style={styles.secondText}>Manfaat</Text>
            </View>
            <Text style={styles.definition}>{detail.manfaat}</Text>
          </View>
          <TouchableOpacity style={styles.buttonAjukan}>
            <Text style={styles.secondText}>Ajukan Sekarang</Text>
          </TouchableOpacity>
          <Text style={styles.title1}>Produk Lainnya</Text>
          <View style={styles.cardArea}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {products.map((data, i) => (
                <TouchableOpacity
                  style={[styles.productCard]}
                  key={i}
                  onPress={() =>
                    navigation.replace('Detail', {nama: data.nama})
                  }>
                  <Image source={{uri: data.img_url}} style={styles.Office} />
                  <Text style={styles.cardText}>{data.nama}</Text>
                  <View style={styles.lowerCard}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon
                        name="file-percent-outline"
                        color={'grey'}
                        size={19}
                      />
                      <Text style={{marginLeft: 5}}>{data.jenis}</Text>
                    </View>
                    {data.suku_bunga !== 0 && <View style={styles.interest}>
                      <Text style={{fontWeight: '700', color: 'white'}}>
                        {data.suku_bunga}%
                      </Text>
                    </View>}
                  </View>
                </TouchableOpacity>
              ))}
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
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 40,
  },
  title: {
    fontWeight: '700',
    fontSize: 25,
    color: '#393985',
    marginTop: 10,
  },
  catWrap: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  definition: {
    textAlign: 'justify',
    paddingRight: 20,
    marginVertical: 10,
  },
  interest: {
    backgroundColor: '#fc5453',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  visimisi: {
    marginVertical: 20,
  },
  primContainer: {
    width: 90,
    alignItems: 'center',
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
  elevation: {
    elevation: 1.5,
    shadowColor: 'black',
  },
  cardText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#393985',
  },
  lowerCard: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardArea: {
    flexDirection: 'row',
  },
  productCard: {
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 1.5,
    width: 200,
    height: 200,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginRight: 15,
  },
  Office: {
    marginTop: 10,
    width: 180,
    height: 80,
  },
  title1: {
    fontWeight: '700',
    color: '#393985',
    fontSize: 17,
    marginTop: 40,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
});

export default Detail;
