import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const Home = ({ navigation }) => (
    <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require('./images/mainScreen.png')} />
        <View style={styles.titleContainer}>
            <Text style={styles.title}>TABOO</Text>
            <Text style={styles.subtitle}>any round is better with</Text>
            <Text style={styles.subtitlePug}>...Pugs</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Category')}>
            <Image style={styles.start} source={require('./images/start-button.png')} />
        </TouchableOpacity>
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
        fontSize: 86,
        fontWeight: '800',
        color: 'maroon',
        marginTop: 70,
        margin: 35,
        marginBottom: 0,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 25,
        textAlign: 'right',
        marginRight: 15,
    },
    subtitlePug: {
        fontSize: 25,
        marginRight: 15,
        textAlign: 'right'
    },
    backgroundImage: {
        width: '100%',
        position: 'absolute',
        top: -300,
    },
    start: {
        width: 100,
        height: 100,
        resizeMode: 'center'
    }

});

export default Home;

