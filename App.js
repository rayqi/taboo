import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './Components/Home'
import Category from './Components/Category'
import Card from './Components/Card'
import GameOver from './Components/GameOver'

export class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HI!!!!!!!@#@! Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const Navigator = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      headerTitle: 'Category'
    }
  },
  Card: {
    screen: Card,
    navigationOptions: {
      headerTitle: 'Card'
    }
  },
  GameOver: {
    screen: GameOver,
    navigationOptions: {
      headerTitle: 'Game Over'
    }
  }
})

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
