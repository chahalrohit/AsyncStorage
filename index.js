/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AsyncExample from './component/AsyncExample';
import UserLogin from './src/grocery-store-login/UserLogin';
import GroceryStore from './src/GroceryStore';
import Home from './src/home/Home';
import SplashScreen from './src/SplashScreen';
import FruitsAndVegetables from './src/fruits&vegetables/FruitsAndVegetables';
import FoodDeliveryApp from './src/food-delivery-app/FoodDeliveryApp';
import TabsPage from './src/tabspage/TabsPage';


AppRegistry.registerComponent(appName, () => GroceryStore)
