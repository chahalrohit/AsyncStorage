import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncExample = () => {
    const [isUser, setUser] = useState(null);

    storeData = () => {
        try {
            let name = isUser;
            AsyncStorage.setItem('user', name);
            alert('data saved');
        } catch (error) {
            alert(error);
        }
    };

    displayData = async () => {
        try {
            let userName = await AsyncStorage.getItem('user');
            alert(userName);
        } catch (error) {
            alert(error);
        }
    };

    const clearAsyncStorage = async () => {
        AsyncStorage.clear();
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={isUser}
                onChangeText={(isUser) => {
                    setUser(isUser);
                }}
            />

            <Button
                title="click to save"
                style={styles.button}
                onPress={storeData} />

            <Button
                title="click to display"
                style={styles.button}
                onPress={displayData} />

            <Button
                title="click to clear"
                style={styles.button}
                onPress={clearAsyncStorage} />

        </View>
    );
};

export default AsyncExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        width: 280,
        borderRadius: 40,
        borderColor: 'skyblue',
    },
});
