import React from 'react';
import { View, Text, Image, SafeAreaView, LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserLogin from './grocery-store-login/UserLogin';
import FruitsAndVegetables from './fruits&vegetables/FruitsAndVegetables';
import FoodDeliveryApp from './food-delivery-app/FoodDeliveryApp';
import TabsPage from '../src/tabspage/TabsPage';
import Home from './home/Home';
import {
  Icon,
  Tabs,
  Tab,
  TabHeading,
  Footer,
  FooterTab,
  Button,
} from 'native-base';
import SplashScreen from './SplashScreen';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './stylesGroceryStore';
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Custom component for drawer
const HomeScreenStack = ({ navigation }) => {
  let clearAsyncStorage = async () => {
    AsyncStorage.clear();
    navigation.navigate('Sign In');
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView style={styles.container}>
            {/*Top Large Image */}
            <View style={styles.draweImageView}>
              <Image
                source={require('../images/me.png')}
                style={styles.drawerImage}
              />
              <Text style={styles.drawerName}>Rohit</Text>
              <Text>rcrchahal@gmail.com</Text>
            </View>

            <DrawerContentScrollView {...props} style={styles.labelView}>
              <DrawerItemList {...props} />
              <DrawerItem label="My Vault" />
              <DrawerItem label="My Privilages" />
              <DrawerItem label="Others Flight" />
              <DrawerItem label="Switch Account" />
              <DrawerItem label="Settings" />
              <DrawerItem label="Share the App" />
              <DrawerItem label="Logout" onPress={() => clearAsyncStorage()} />
            </DrawerContentScrollView>
          </SafeAreaView>
        );
      }}>
      <Drawer.Screen name="Home" component={TabsPage} />
    </Drawer.Navigator>
  );
};

const GroceryStore = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash Screen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign In"
          component={UserLogin}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="FruitsAndVegetables"
          component={HomeScreenStack}
          options={{
            drawerLabel: 'Drawer',
            title: 'Fruits And Vegetables',
            headerStyle: {
              backgroundColor: '#2566ff', //Set Header color
            },
            headerTintColor: '#ffffff', //Set Header text color
            headerTitleStyle: {
              fontFamily: 'sans-serif',
            },
            headerShown: false,
          }}
        />
        <Stack.Screen name="Tech" component={Home} />
        <Stack.Screen name="Food" component={FoodDeliveryApp} options={{
          headerShown:false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GroceryStore;
