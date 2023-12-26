import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

//ini kodingan screen yang digunain dalam project
import Homepage from './src/screens/Homepage';
import SKredit from './src/screens/Kredit';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Profile from './src/screens/Profile';
import Detail from './src/screens/Detail';
import User from './src/screens/User';
import Dashboard from './src/screens/Dashboard';
import Contact from './src/screens/Contact';
import Atur from './src/screens/AturBunga';
import Add from './src/screens/AddProduct';
import Reset from './src/screens/Reset';
import List from './src/screens/List';
import SplashScreen from './src/screens/Splashscreen';
import OnBoard1 from './src/screens/OnBoard1';
import OnBoard2 from './src/screens/OnBoard2';
import OnBoard3 from './src/screens/OnBoard3';
import SDeposito from './src/screens/Deposito';
import STabungan from './src/screens/Tabungan';
import ListProduct from './src/screens/ListProduct';
import EditProduct from './src/screens/EditProduct';

//pemanggilan stack dan bottom tab
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="SKredit" component={SKredit} />
      <Stack.Screen name="STabungan" component={STabungan} />
      <Stack.Screen name="SDeposito" component={SDeposito} />
    </Stack.Navigator>
  );
};

const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

const RootHome = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const userLogin = async () => {
    return await AsyncStorage.getItem('username');
  };

  useEffect(() => {
    const checkUserLogin = async () => {
      const username = await userLogin();
      setUserLoggedIn(username !== null);
    };

    checkUserLogin();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#1c1c1c',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#393985',
          position: 'absolute',
          height: 70,
        },
        tabBarHideOnKeyboard: true,
        tabBarItemStyle: {
          paddingVertical: 8,
        },
      }}>
      <Tab.Screen
        name="Homee"
        component={HomeStack}
        // detachInactiveScreens={true}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={36} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={ProductStack}
        // detachInactiveScreens={true}1
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({color, size}) => (
            // <View style={{backgroundColor:'orange',padding:5,borderRadius: 30}}>
            <Icon name="office-building" color={color} size={36} />
            // </View>
          ),
        }}
      />

      <Tab.Screen
        name="Set"
        component={Contact}
        detachInactiveScreens={true}
        options={{
          tabBarLabel: 'Kontak',
          tabBarIcon: ({color, size}) => (
            <Icon name="phone" color={color} size={36} />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={userLoggedIn ? User : Login}
        detachInactiveScreens={true}
        options={{
          tabBarLabel: 'Akun',
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={36} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

//Navigation Container untuk manggil screen
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splashscreen" component={SplashScreen} />
        <Stack.Screen name="OnBoard1" component={OnBoard1} />
        <Stack.Screen name="OnBoard2" component={OnBoard2} />
        <Stack.Screen name="OnBoard3" component={OnBoard3} />
        <Stack.Screen name="Homepage" component={RootHome} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: true}}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SKredit" component={SKredit} />
        <Stack.Screen name="SDeposito" component={SDeposito} />
        <Stack.Screen name="STabungan" component={STabungan} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Atur" component={Atur} />
        <Stack.Screen name="AddProduct" component={Add} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="ListProduct" component={ListProduct} />
        <Stack.Screen name="EditProduct" component={EditProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
