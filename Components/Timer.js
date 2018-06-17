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
        // console.log('timer func this.props', this.props)
        // console.log('anything??', this.props.time)
        // console.log('timer this.state', this.state.seconds)
        this.setState(prevState => ({ seconds: prevState.seconds - 1 }))
        if (this.state.seconds === 0) {
            clearInterval(this.intervalId);
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000)

    }


    render() {
        // const { navigate } = this.props.navigation
        // console.log('Timer this.state', this.state)
        return (
            <Text title="seconds">{this.state.seconds}</Text>)
    }

}
