import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  BackHandler,
  Alert,
  StatusBar,
} from 'react-native';
import { Button, Text, Card, Icon, Header, Tabs, TabHeading, Footer, FooterTab, Container } from 'native-base';
import FoodDeliveryApp from '../food-delivery-app/FoodDeliveryApp';
import Home from '../home/Home';
import styles from './styles';
import DATA from './DATA';

class FruitsAndVegetables extends Component {
  constructor(props) {
    super(props);
    this.initData = DATA;
    this.state = {
      data: this.initData,
      addItemModalVisible: false,
      editItemModalVisible: false,
      newFruitName: '',
      newFruitPrice: '',
      updateFruitName: '',
      updateFruitPrice: '',
      editedItem: 0,
      binary: true
    };
  }

  componentDidMount() {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }

  removeItem = (key) => {
    let filteredData = this.state.data.filter((item) => item.key !== key);
    this.setState({ data: filteredData });
  };
  //for add item modal
  setAddModal = (bool) => {
    this.setState({ addItemModalVisible: bool });
  };
  // for edit item modal
  setEditModal = (bool) => {
    this.setState({ editItemModalVisible: bool });
  };
  // set key to editItem
  setEditedItem = (key) => {
    this.setState({ editedItem: key });
  };

  setUpdateFruitName = (name) => {
    this.setState({ updateFruitName: name });
  };
  setUpdateFruitPrice = (price) => {
    this.setState({ updateFruitPrice: price });
  };
  // function for update item
  handleEditItem = (editedItem) => {
    const newData = this.state.data.map((item) => {
      if (item.key === editedItem) {
        item.name = this.state.updateFruitName;
        item.price = this.state.updateFruitPrice;
        return item;
      }
      return item;
    });
    this.setState({ data: newData });
  };

  addToFavorites = (index) => {

    if (this.state.data[index].color == '#d9d9d9') {
      this.state.data[index].color = '#ff6666'
      this.forceUpdate()
      alert('Add to Whishlist')
    } else {
      this.state.data[index].color = '#d9d9d9'
      this.forceUpdate()
      alert('Remove from Whislist')
    }

  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2566ff" barStyle="default" />

        {/* Add Item Modal start */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.addItemModalVisible}
          onRequestClose={() => this.setAddModal(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Add new item</Text>
              <TextInput
                placeholder="Enter fruit name"
                value={this.state.newFruitName}
                style={styles.modalInput}
                onChangeText={(text) => this.setState({ newFruitName: text })}
              />
              <TextInput
                placeholder="Enter fruit price"
                style={styles.modalInput}
                value={this.state.newFruitPrice}
                onChangeText={(text) => this.setState({ newFruitPrice: text })}
                keyboardType="numeric"
              />
              <Button
                block
                style={styles.saveModal}
                onPress={() => {
                  if (
                    this.state.newFruitName.length == 0 ||
                    this.state.newFruitPrice.length == 0
                  ) {
                    alert("You must enter fruit's name and price");
                    return;
                  }
                  let newKey = Math.random().toString(12).slice(7);
                  const newFruit = {
                    key: newKey,
                    name: this.state.newFruitName,
                    price: this.state.newFruitPrice,
                    imageURL:
                      'http://www.pngmart.com/files/1/Kiwi-Fruit-PNG-Transparent-Image.png',
                  };
                  this.state.data.push(newFruit);
                  this.setState({ newFruitName: '' });
                  this.setState({ newFruitPrice: '' });
                  this.setState({ addItemModalVisible: false });
                }}>
                <Text>Save</Text>
              </Button>
            </View>
          </View>
        </Modal>
        {/* Add Item Modal end  */}

        {/* edit item modal start */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.editItemModalVisible}
          onRequestClose={() => this.setEditModal(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Update Item</Text>
              <TextInput
                placeholder="Enter new name"
                value={this.state.updateFruitName}
                style={styles.modalInput}
                onChangeText={(text) => this.setState({ updateFruitName: text })}
                defaultValue={this.state.updateFruitName}
                editable={true}
              />
              <TextInput
                placeholder="Enter new price"
                style={styles.modalInput}
                value={this.state.updateFruitPrice}
                onChangeText={(text) => this.setState({ updateFruitPrice: text })}
                keyboardType="numeric"
                defaultValue={this.state.updateFruitPrice}
                editable={true}
              />
              <Button
                block
                style={styles.saveModal}
                onPress={() => {
                  if (
                    this.state.updateFruitName.length == 0 ||
                    this.state.updateFruitPrice.length == 0
                  ) {
                    alert("You must enter fruit's name and price");
                    return;
                  }
                  this.handleEditItem(this.state.editedItem);
                  this.setState({ updateFruitName: '' });
                  this.setState({ updateFruitPrice: '' });
                  this.setEditModal(false);
                }}>
                <Text>Save</Text>
              </Button>
            </View>
          </View>
        </Modal>
        {/* edit item modal end */}

        <View style={styles.titleView}>
          <Text style={styles.txt}>Fruits and Vegetables</Text>
          <TouchableOpacity style={styles.plusButton}>
            <Icon
              name="plus-circle"
              type="FontAwesome"
              style={{ color: '#2566ff' }}
              onPress={() => this.setState({ addItemModalVisible: true })}
            />
          </TouchableOpacity>

          <Image style={styles.img} source={require('../../images/sort.png')} />
          <Icon type="FontAwesome" name="th-large" style={styles.icon} />
        </View>

        <SafeAreaView style={styles.flatView}>
          <FlatList
            data={this.state.data}
            extraData={this.data}
            renderItem={({ item, index }) => (
              <Card style={styles.card} noShadow>
                <View style={styles.favDel}>
                  <TouchableOpacity onPress={() => this.addToFavorites(index)}>
                    {/* Icon in flatlist  */}
                    <Icon
                      name={item.icon}
                      style={{
                        marginTop: 10,
                        fontSize: 25,
                        color: item.color
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => this.removeItem(item.key)}
                    style={styles.delButton}>
                    <Icon
                      name="delete"
                      type="AntDesign"
                      style={styles.delIcon}
                    />
                  </TouchableOpacity>
                </View>

                <Image source={{ uri: item.imageURL }} style={styles.image} />

                <View style={styles.namePrice}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>
                    {'\u20B9'}
                    {item.price}
                  </Text>
                </View>
                <Button style={styles.button}>
                  <Text style={styles.text}>ADD</Text>
                </Button>

                <TouchableOpacity
                  onPress={() => {
                    this.setEditModal(true);
                    this.setEditedItem(item.key);
                    this.setUpdateFruitName(item.name);
                    this.setUpdateFruitPrice(item.price);
                  }}>
                  <Icon type="AntDesign" name="edit" style={styles.editIcon} />
                </TouchableOpacity>
              </Card>
            )}
            numColumns={2}
            keyExtractor={(item) => item.key}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default FruitsAndVegetables;
