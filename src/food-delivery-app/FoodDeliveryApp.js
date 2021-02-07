import React,{useEffect} from 'react';
import { Card, Icon, Button, Tabs } from 'native-base';
import {
    View,
    Text,
    FlatList,
    Image,
    SafeAreaView,
    ImageBackground,
    BackHandler,
} from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const DATA = [
    {
        key: '1',
        name: 'Fiorentina Steak',
        info: 'Margherita of Naples with the thick crust.',
        price: '20.00 USD',
        imageURL:
            'https://c8.alamy.com/comp/F9XFCC/t-bone-steakporterhouse-steakbistecca-alla-fiorentina-F9XFCC.jpg',
    },
    {
        key: '2',
        name: 'Bottarga',
        info: 'Smoked eggs from the rat of the sea.',
        price: '10.00 USD',
        imageURL:
            'https://cdn.shopify.com/s/files/1/2387/9091/files/Herpac1b.png?v=1606327073',
    },
    {
        key: '3',
        name: 'Lasagna',
        info: 'Exemplary pasta, ragu and bechamel.',
        price: '15.00 USD',
        imageURL:
            'https://www.vincenzosplate.com/wp-content/uploads/2018/11/vegetarian-lasagna.png',
    },
    {
        key: '4',
        name: 'Risotto Steak',
        info: 'Margherita of Naples with the thick crust.',
        price: '25.00 USD',
        imageURL:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbBAAOVipFiwQ8KGnocl5OndDalV-8Mg5Kw&usqp=CAU',
    },
];

const Food = ({ item }) => {
    return (
        <View style={styles.main}>
            <Card style={styles.card} transparent>
                <Image source={{ uri: item.imageURL }} style={styles.image} />
                <View style={styles.nameInfo}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={styles.infoText}>{item.info}</Text>
                </View>
                <View>
                    <Icon name="square" type="Ionicons" style={styles.plusIcon} />
                    <Icon name="plus" type="Entypo" style={styles.plusBox} />
                    <Text style={styles.priceText}>{item.price}</Text>
                </View>
            </Card>
        </View>
    );
};

const FoodDeliveryApp = ({navigation}) => {
    useEffect(() => {
        const goBack = () => {
            navigation.goBack();
        }
        const backHandler = BackHandler.addEventListener("hardwareBackPress", goBack);

        return () => backHandler.remove();
    }, []);
    return (
        <ImageBackground
            source={require('../../images/background1.png')}
            style={styles.backImage}>
            <View style={styles.title}>

                <View style={styles.view1} >
                    <Text style={styles.shopName1}>Bona Italian</Text>
                    <Card style={styles.cardStyle} transparent>

                    </Card>
                </View>
            </View>
            <Text style={styles.shopName2}>Tasty spicy</Text>

            <View style={styles.container}>
                <View style={styles.options}>
                    <Icon type="EvilIcons" name="search" style={styles.searchIcon} />

                    <Icon
                        type="Ionicons"
                        name="ios-square-outline"
                        style={styles.searchBox}
                    />

                    <Text style={styles.searchText}>Search</Text>

                    <Icon name="md-options-outline" type="Ionicons" style={styles.icon} />
                </View>

                <SafeAreaView>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Food item={item} />}
                        keyExtractor={(item) => item.key}
                    />
                </SafeAreaView>

                <Button style={styles.button} block>
                    <Text style={styles.buttonText}>Check List</Text>
                </Button>
            </View>
        </ImageBackground>
    );
};

export default FoodDeliveryApp;
