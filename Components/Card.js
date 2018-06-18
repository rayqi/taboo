import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { createStackNavigator } from 'react-navigation';
import GameOver from './GameOver'


export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCategory: [],
            score: 0,
            index: 0,
            seconds: 6
        }
        this.shuffleArray = this.shuffleArray.bind(this)
        this.left = this.left.bind(this)
        this.right = this.right.bind(this)
    }

    shuffleArray = function () {
        let array = this.props.navigation.state.params.category
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    componentWillMount = function () {
        this.shuffleArray()
        this.isMounted = true;
    }

    componentDidMount = function () {
        this.interval = setInterval(this.timer.bind(this), 1000)
    }

    timer() {
        this.setState(prevState => ({ seconds: prevState.seconds - 1 }))
        if (this.state.seconds === 0) {
            clearInterval(this.interval);
            this.props.navigation.navigate('GameOver', { score: this.state.score })
        }
    }



    componentWillUnmount = function () {
        this.isMounted = false;
    }

    left = function () {
        this.setState(prevState => ({ score: prevState.score - 1, index: prevState.index + 1 }))
    }

    right = function () {
        this.setState(prevState => ({ score: prevState.score + 1, index: prevState.index + 1 }))
    }

    render() {
        let myCards = this.props.navigation.state.params.category
        return (
            <View style={styles.container}>
                <Swiper
                    cards={myCards}
                    renderCard={(card) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.main}>{card.main}</Text>
                                {card.taboo.map(word => {
                                    return <Text key={word} style={styles.taboo}>{word}</Text>
                                })}
                            </View>
                        )
                    }}
                    onSwipedLeft={this.left}
                    onSwipedRight={this.right}
                    cardIndex={0}
                    backgroundColor={'rosybrown'}
                    stackSize={3}>
                </Swiper>
                <View style={styles.details}>
                    <Text style={styles.score}>SCORE:{this.state.score}</Text>
                    <Text style={styles.timer}>TIME LEFT:{this.state.seconds}</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'bisque'
    },
    card: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    details: {
        alignItems: 'flex-start',
    },
    score: {
        fontSize: 20,
        color: 'white',
        fontWeight: '900'
    },
    timer: {
        fontSize: 20,
        fontWeight: '900',
        color: 'white'
    },
    main: {
        textAlign: 'center',
        fontSize: 55,
        backgroundColor: 'maroon',
    },
    taboo: {
        backgroundColor: 'white',
        fontSize: 20,
        textAlign: 'center',
        margin: 30
    }
});