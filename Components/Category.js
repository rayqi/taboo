import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const Category = ({ navigation }) => (
    <View style={styles.container}>
        <Text>CATEGORIES</Text>
        <Button title="Food" onPress={() => {
            fetch(
                `https://wordsapiv1.p.mashape.com/words/food/synonyms`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            ).then(data => res.JSON())
                .then(data => console.log(data));


            navigation.navigate('Card')
        }} />
        <Button title="Personality" onPress={() => navigation.navigate('Card')} />
        <Button title="Actors" onPress={() => navigation.navigate('Card')} />
    </View>
);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Category;