import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//ini kodingan screen yang digunain dalam project 
import Homepage from './src/screens/Homepage'; 
import SKredit from './src/screens/Simulasi/Kredit'; 

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
          backgroundColor: '#2b2b2b',
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
            <Icon name="playlist-check" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={SKredit}
        // detachInactiveScreens={true}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View style={{backgroundColor:'orange',padding:5,borderRadius: 30}}>
               <Icon name="plus" color={'white'} size={40} />
            </View>

          ),
        }}
      />
          
      <Tab.Screen
        name="Set"
        component={Homepage}
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
        <Stack.Screen name='Homepage' component={RootHome} />
        <Stack.Screen name='SKredit' component={SKredit} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App