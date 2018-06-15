import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './Components/Home'

export class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HI!!!!!!!@#@! Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
