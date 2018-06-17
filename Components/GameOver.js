import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const GameOver = ({ navigation }) => (
    <View style={styles.container}>
        <Image style={styles.image} source={require('./images/tryAgain.jpg')} />
        <Text style={styles.gameover}>GAME OVER</Text>
        <Text style={styles.score}> SCORE: {navigation.state.params.score}</Text>
        <TouchableOpacity style={styles.button} title="Try Again" onPress={() => navigation.navigate('Category')}>
            <Image source={require('./images/start-button.png')} />
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    // image: {
    //     flex: 1
    // },
    // gameover: {
    //     flex: 1
    // },
    // score: {
    //     flex: 1
    // },
    // button: {
    //     flex: 1
    // }
});

export default GameOver;