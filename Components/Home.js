import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Home = () => (
    <View style={styles.container}>
        <Text>GAME OF APP</Text>
        {/* <Button title="Start" onPress={() =>  } /> */}
    </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Home;

