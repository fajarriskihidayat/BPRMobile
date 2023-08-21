import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//ini kodingan screen yang digunain dalam project 
import Homepage from './src/screens/Homepage'; 
import SKredit from './src/screens/Kredit'; 
import Login from './src/screens/Login'; 
import Register from './src/screens/Register'; 
import Profile from './src/screens/Profile'; 
import Detail from './src/screens/Detail'; 
import User from './src/screens/User'; 

//pemanggilan stack dan bottom tab
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const HomeStack = () => {
//   return(
//   <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="Home" component={Homepage} />
//       <Stack.Screen name="EditFlow" component={EditFlow} />
//   </Stack.Navigator>
//   );
// }

const RootHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor : '#1c1c1c',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#393985',
          paddingVertical : 10,
          position : 'absolute',
          height : 75,
        },
      }}
    >
      <Tab.Screen
        name="Homee"
        component={Homepage}
        // detachInactiveScreens={true}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={SKredit}
        // detachInactiveScreens={true}1
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            // <View style={{backgroundColor:'orange',padding:5,borderRadius: 30}}>
               <Icon name="office-building" color={color} size={40} />
            // </View>

          ),
        }}
      />
          
      <Tab.Screen
        name="Set"
        component={Profile}
        detachInactiveScreens={true}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="contacts" color={color} size={40} />
          ),
        }}
      />

    <Tab.Screen
        name="User"
        component={User}
        detachInactiveScreens={true}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={40} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

//Navigation Container untuk manggil screen
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Homepage' component={RootHome} />
        <Stack.Screen name='SKredit' component={SKredit} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='User' component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App