import React, { useEffect } from 'react';
import { View, Text, FlatList, Image,SafeAreaView} from 'react-native';
import FoodDelivery from '../food-delivery-app/FoodDeliveryApp';
import Fruit from '../fruits&vegetables/FruitsAndVegetables';
import DATA from './DATA';
import styles from './styles';
import {Button,Tabs} from 'native-base';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Item = ({ item }) => {
    return (
        <View style={styles.view1}>
            <View style={styles.view2}>
                <Image source={{ uri: item.imageURL }} style={styles.image}></Image>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        </View>
    );
};

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            {/* <Tabs>
                <FoodDelivery heading= "Food Delivery" />
                <Fruit heading = "Fruits" />
            </Tabs> */}
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={(item) => item.key}
                    numColumns={3}
                />
            </SafeAreaView>

        </View>
    );
}

export default Home;
