import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const testCard = ({ navigation }) => (
    <View style={styles.container}>
        <Text>GAME OVER</Text>
    </View>
);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default testCard;