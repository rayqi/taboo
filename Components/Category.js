import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const Category = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.titleText}>CATEGORIES</Text>
        </View>
        <View style={styles.topics}>
            <View>
                {/* <Button style={styles.buttonOne} title="Food" onPress={() => {
                    navigation.navigate('Card')
                }} /> */}
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Card')
                }}>
                    <Image style={styles.foodImage} source={require('./images/foodbutton.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Card')
                }}>
                    <Image style={styles.travelImage} source={require('./images/vintage-plane.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Card')
                }}>
                    <Image style={styles.fullstackImage} source={require('./images/fullstackbutton.png')} />
                </TouchableOpacity>

            </View>
            {/* <Button style={styles.buttonTwo} title="Personality" onPress={() => navigation.navigate('Card')} />
            <Button style={styles.buttonThree} title="Actors" onPress={() => navigation.navigate('Card')} /> */}
        </View>
    </View >
);



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'goldenrod'
    },
    titleText: {
        fontSize: 40,
        color: 'white',
    },
    // topics: {
    //     flex: 4,
    // },
    // buttonOne: {
    //     backgroundColor: 'green',
    //     paddingVertical: 300,
    //     flex: 1
    // },
    // buttonTwo: {
    //     backgroundColor: 'tomato',
    //     flex: 1
    // },
    // buttonThree: {
    //     backgroundColor: 'blue',
    //     flex: 2
    // },
    foodImage: {
        flex: 1
    },
    travelImage: {
        flex: 1
    },
    fullstackImage: {
        flex: 1
    }

    // boxContainer: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    // boxOne: {
    //     flex: 3,
    //     backgroundColor: 'blue',
    //     justifyContent: 'space-around'
    // },
    // boxTwo: {
    //     flex: 2,
    //     backgroundColor: 'blue',
    //     justifyContent: 'space-around'
    // },
    // boxThree: {
    //     flex: 1,
    //     backgroundColor: 'blue',
    //     justifyContent: 'space-around'
    // }
});

export default Category;