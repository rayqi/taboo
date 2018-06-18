import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const GameOver = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.background}>
            <Image style={styles.image} source={require('./images/tryAgain.jpg')} />
        </View>
        <View style={styles.details}>
            <Text style={styles.gameover}>GAME OVER</Text>
            <Text style={styles.score}> SCORE: {navigation.state.params.score}</Text>
        </View>
        <TouchableOpacity style={styles.button} title="Try Again" onPress={() => navigation.navigate('Category')}>
            <Image source={require('./images/replaybutton.png')} />
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    details: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
    },
    gameover: {
        marginTop: 40,
        fontSize: 55,
        fontWeight: '800',
        color: 'maroon'
    },
    score: {
        fontSize: 30
    },
    background: {
        flex: -1,
        width: 20,
        height: 10,
        marginRight: 30,
        marginBottom: 30
    },
    button: {
        marginBottom: 30,
        marginLeft: 30
    }
});

export default GameOver;