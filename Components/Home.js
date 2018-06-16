import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const Home = ({ navigation }) => (
    <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require('./images/mainScreen.png')} />
        <View style={styles.titleContainer}>
            <Text style={styles.title}>TABOO</Text>
        </View>
        <Button style={styles.button} color="bisque" title="Start" onPress={() => navigation.navigate('Category')} />
    </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer: {
        flex: 1
    },
    title: {
        fontSize: 90,
        fontWeight: 'bold',
        color: 'maroon',
        margin: 35,
        textAlign: 'center'
    },
    button: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        position: 'absolute',
        top: -300,
    }
});

export default Home;

