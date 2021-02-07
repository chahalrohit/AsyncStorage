import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.Hide_Splash_Screen();
    }, 100);
  }

  componentDidUpdate() {
    this._loadData();
  }

  _loadData = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    isLoggedIn !== null
      ? this.props.navigation.navigate('FruitsAndVegetables')
      : this.props.navigation.navigate('Sign In');
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#2566ff"
          barStyle="default"
        />
        <Image
          style={styles.image}
          source={require('../images/groceryStore.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    marginLeft: 35,
  },
});
