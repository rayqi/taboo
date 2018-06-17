import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const GameOver = ({ navigation }) => (
    <View style={styles.container}>
        <Image source={require('./images/tryAgain.jpg')} />
        <Text>GAME OVER</Text>
        <Button title="Try Again" onPress={() => navigation.navigate('Category')} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default GameOver;