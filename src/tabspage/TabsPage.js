import React,{useState,useEffect} from 'react';
import { TouchableOpacity, Text,BackHandler } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Tabs,Tab,TabHeading } from 'native-base';
import Home from '../home/Home';
import FoodDeliveryApp from '../food-delivery-app/FoodDeliveryApp';
import FruitsAndVegetables from '../fruits&vegetables/FruitsAndVegetables';
import styles from './styles';

const TabsPage = ({navigation}) => {
    const [isActive, setActive] = useState(false);
    return (
        <Container>
            <Header style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon
                        type="MaterialCommunityIcons"
                        name="menu"
                        style={styles.headerMenuIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Fruits And Vegetables</Text>
            </Header>

            <Content>
                <FruitsAndVegetables />
            </Content>
            
                {/* <Tabs>
                    <Tab
                        heading={
                            <TabHeading style={{ backgroundColor: '#2566ff' }}>
                                <Icon name="fruit-watermelon" type="MaterialCommunityIcons" />
                                <Text style={styles.nativeHeaderIconText}> Fruit</Text>
                            </TabHeading>
                        }>
                        <FruitsAndVegetables />
                    </Tab>

                    <Tab
                        heading={
                            <TabHeading style={{ backgroundColor: '#2566ff' }}>
                                <Icon name="food-fork-drink" type="MaterialCommunityIcons" />
                                <Text style={styles.nativeHeaderIconText}> Food</Text>
                            </TabHeading>
                        }>
                        <FoodDeliveryApp />
                    </Tab>

                    <Tab
                        heading={
                            <TabHeading style={{ backgroundColor: '#2566ff' }}>
                                <Icon name="laptop" type="Entypo" />
                                <Text style={styles.nativeHeaderIconText}> Tech</Text>
                            </TabHeading>
                        }>
                        <Home />
                    </Tab>
                </Tabs> */}

            <Footer>
                <FooterTab style={styles.footerContainer} >

                    <Button onPress={() => (
                        setActive(!isActive)
                    )} vertical active={!isActive}  >
                        <Icon name="local-grocery-store" type="MaterialIcons" />
                        <Text style={styles.nativeHeaderIconText}>Grocery</Text>
                    </Button>

                    <Button onPress={()=>(
                        navigation.navigate('Food'),
                        setActive(!isActive)
                        )} vertical active={isActive}>
                        <Icon name="food-fork-drink" type="MaterialCommunityIcons" />
                        <Text style={styles.nativeHeaderIconText}>Food</Text>
                    </Button>

                    <Button onPress={() => (
                        setActive(!isActive)
                    )} vertical active={isActive}>
                        <Icon name="settings" type="Ionicons"/>
                        <Text style={styles.nativeHeaderIconText}>Settings</Text>
                    </Button>

                    <Button onPress={() => (
                        setActive(!isActive)
                    )} vertical active={isActive}>
                        <Icon name="user-alt" type="FontAwesome5"/>
                        <Text style={styles.nativeHeaderIconText}>Profile</Text>
                    </Button>

                </FooterTab>
            </Footer>
        </Container>
    );
}

export default TabsPage;
