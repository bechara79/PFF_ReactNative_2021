import React, { Component } from "react";
import { View, StyleSheet } from 'react-native'

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import Home from "./src/Screens/Home";
import HomeScreen from "./src/Components/login/HomeScreen";
import Signup from "./src/Components/login/SignUp";
import UploadDeal from "./src/Components/UploadDeal";
import LoginScreen from "./src/Components/login/LoginScreen";
import { createStackNavigator } from "react-navigation-stack";
import RootStackNavigator from './src/Components/navigations/AppNavigation'
import drawerCentent from './src/Components/navigations/DrawerContent'
import AppNavigation from './src/Components/navigations/AppNavigation'
import { DrawerContent } from "@react-navigation/drawer";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


// const DrawerNavigation = createDrawerNavigator(
//   {

//   },
//   {
//     contentComponent: drawerCentent,
//         drawerPosition: 'left',
//         drawerWidth: 240,
        
//   }
// );
const MainNavigator = createStackNavigator(
  {
    
    //DrawerNavigation :DrawerNavigation,
    HomeScreen: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    Signup: { screen: Signup },
    Home: { screen: Home },
    Upload_Deal: { screen: UploadDeal },
  },

  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#8e42b6"

      }
    }
  }
);
const AppContainer = createAppContainer(MainNavigator);

//const Stack = createStackNavigator();
export default class App extends Component {
  render() {

    return (
      
      <AppContainer />


    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})
