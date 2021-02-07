import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,StatusBar} from 'react-native';

const userInfo = {username:'admin',password:'pass'};

class LoginScreen extends Component{
    static navigationOptions = {
        header:null
    }
    render(){
        return(
            <View>
                <StatusBar 
                backgroundColor="#1e90ff"
                barStyle="light-content"
                />
                <Text style={styles.welcome}>Login to my app</Text>
                <TextInput 
                style={styles.input}
                placeholder="Username"
                />
                <TextInput 
                style={styles.input}
                
                />
            </View>
        );
    }
}