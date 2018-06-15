import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Food } from './deck'

export default class Card extends React.Component {
    constructor() {
        super()
        this.state = {
            score: 0
        }
    }

    render() {
        console.log(this.state)
        return (
            <View style={styles.container}>
                <Text>CARD</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
