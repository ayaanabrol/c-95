import React , {Component} from 'react';
import {Text,View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';
import Logout from '../screens/Logout';

const Drawer =createDrawerNavigator()
const DrawerNavigator=()=>{
  return(
    <Drawer.Navigator>
    <Drawer.Screen name="home" component={TabNavigator}/>
    <Drawer.Screen name="profile" component={Profile}/>
    <Drawer.Screen name="logout" component={Logout}/>
    </Drawer.Navigator>
  )
}
 export default DrawerNavigator;