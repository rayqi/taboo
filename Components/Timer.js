import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import GameOver from './GameOver'

export default class Countdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 10
        }
    }

    timer() {
        this.setState({
            seconds: this.state.seconds - 1
        })
        if (this.state.seconds === 0) {
            clearInterval(this.intervalId);
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000)
    }

    render() {
        return (
            <Text title="seconds">{this.state.seconds}</Text>)
    }

}
