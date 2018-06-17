// import React from 'react';
// import { Text } from 'react-native';
// import { createStackNavigator } from 'react-navigation';
// import GameOver from './GameOver'

// export default class Countdown extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             seconds: 10
//         }
//         console.log("*********8")
//         console.log('this.props constructor', this.props)
//     }

//     timer() {
//         this.setState(prevState => ({ seconds: prevState.seconds - 1 }))
//         if (this.state.seconds === 0) {
//             clearInterval(this.intervalId);
//             this.props.navigation.navigate('GameOver')
//         }
//     }

//     componentDidMount() {
//         this.intervalId = setInterval(this.timer.bind(this), 1000)

//     }


//     render() {
//         // const { navigate } = this.props.navigation
//         // console.log('Timer this.state', this.state)
//         return (
//             <Text title="seconds">{this.state.seconds}</Text>)
//     }

// }
