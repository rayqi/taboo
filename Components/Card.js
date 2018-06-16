import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Food } from './deck'
import Timer from './Timer'
import Swiper from 'react-native-deck-swiper';
import { createStackNavigator } from 'react-navigation';
import testCard from './test_card'


export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCategory: Food,
            score: 0,
            index: 0,
            seconds: 10
        }
        this.shuffleArray = this.shuffleArray.bind(this)
        this.left = this.left.bind(this)
        this.right = this.right.bind(this)
    }


    componentDidMount = function () {
        this.shuffleArray()
        // this.intervalId = setInterval(this.timer.bind(this), 1000)
    }
    // timer() {
    //     console.log(this.state.seconds);
    //     this.setState(
    //         prevState => ({ seconds: prevState.seconds - 1 })
    //     )
    //     if (this.state.seconds === 0) {
    //         clearInterval(this.intervalId);
    //     }
    // }

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
    left = function () {
        this.setState(prevState => ({ score: prevState.score - 1, index: prevState.index + 1 }))
    }


    //if button clicked, index increments to go continue the deck, score is incremented
    right = function () {
        this.setState(prevState => ({ score: prevState.score + 1, index: prevState.index + 1 }))
    }




    render() {
        let cardKey = this.state.currentCategory[this.state.index].main
        let cardValues = this.state.currentCategory[this.state.index].taboo
        let myCards = Food
        return (
            <View style={styles.container}>
                <Swiper
                    cards={myCards}
                    renderCard={(card) => {
                        return (
                            <View style={styles.card}>
                                {/* <Text style={{ backgroundColor: 'red' }}>{this.state.seconds}</Text> */}
                                <Text style={{ backgroundColor: 'red' }}><Timer /></Text>

                                <Text style={styles.text}>{card.main}</Text>
                                {card.taboo.map(word => {
                                    return <Text>{word}</Text>
                                })}
                                <Text>{this.state.score}</Text>

                            </View>
                        )
                    }}
                    // onSwipedLeft={(cardIndex) => { console.log("swipled left") }}
                    // onSwipedRight={(cardIndex) => { console.log("swiped right") }}
                    onSwipedLeft={this.left}
                    onSwipedRight={this.right}
                    // onSwipedAll={({ navigation }) => {
                    //     console.log('game over')
                    //     navigation.navigate('testCard')
                    // }}
                    cardIndex={0}
                    backgroundColor={'#4FD0E9'}
                    stackSize={3}>
                </Swiper>
                {/* <Text style={{ backgroundColor: 'red' }}><Timer /></Text>
                <Text>{cardKey}</Text>
                {cardValues.length > 0 ? cardValues.map(word => {
                    return <Text>{word}</Text>
                }) : null}
                <Text>{this.state.score}</Text>
                <Button title="wrong" onPress={this.onButtonPressLeft} />
                <Button title="right" onPress={this.onButtonPressRight} /> */}
            </View>
        )
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white"
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    }
});