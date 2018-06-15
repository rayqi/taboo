import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Food } from './deck'

export default class Card extends React.Component {
    constructor() {
        super()
        this.state = {
            currentCategory: Food,
            score: 0,
            index: 0
        }
        this.shuffleArray = this.shuffleArray.bind(this)
        this.onButtonPressLeft = this.onButtonPressLeft.bind(this)
        this.onButtonPressRight = this.onButtonPressRight.bind(this)
    }

    /*[
        { bacon: ['breakfast', 'burger', 'pork', 'pig', 'egg'] },
        { cake: ['birthday', 'dessert', 'frosting', 'layers', 'wedding'] },
        { pizza: ['artichoke', 'cheese', 'pepporoni', 'dominoes', 'papa johns'] }
    ] */
    componentDidMount = function () {
        this.shuffleArray()
    }

    //shuffles cards when game starts
    shuffleArray = function () {
        let array = this.state.currentCategory
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        this.setState({ currentCategory: array })
    }

    //if button clicked, index increments to go continue the deck, score is decremented
    onButtonPressLeft = function () {
        this.setState(prevState => ({ score: prevState.score - 1, index: prevState.index + 1 }))
    }


    //if button clicked, index increments to go continue the deck, score is incremented
    onButtonPressRight = function () {
        this.setState(prevState => ({ score: prevState.score - 1, index: prevState.index + 1 }))
    }




    render() {
        console.log('score', this.score)
        console.log('card', this.state.currentCategory)
        return (
            <View style={styles.container}>
                <Text>{this.state.currentCategory[this.state.index][0]}</Text>
                <Button title="wrong" onPress={this.onButtonPressLeft} />
                <Button title="right" onPress={this.onButtonPressRight} />
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
