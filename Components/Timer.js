import React from 'react';
import { View, Text } from 'react-native'

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

// Countdown.prototype.init = function(){
//     this.reset();
//     setInterval(1000)
// }

// Countdown.prototype.reset = funcion(){
//     time = this.startTime.split(":")
//     this.minutes = 
//}

