import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const Category = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.titleText}>CATEGORIES</Text>
        </View>
        <View style={styles.topics}>
            <View>
                <TouchableOpacity onPress={() => { navigation.navigate('Card') }}>
                    <Image style={styles.foodImage} source={require('./images/foodbutton.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('Card') }}>
                    <Image style={styles.travelImage} source={require('./images/vintage-plane.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('Card') }}>
                    <Image style={styles.fullstackImage} source={require('./images/fullstackbutton.png')} />
                </TouchableOpacity>
            </View>
        </View>
    </View >
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rosybrown'
    },
    titleText: {
        fontSize: 40,
        color: 'white',
        fontWeight: '800',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topics: {
        flex: 1
    },
    // foodImage: {
    //     flex: 1
    // },
    // travelImage: {
    //     flex: 1
    // },
    // fullstackImage: {
    //     flex: 1
    // }
});

export default Category;