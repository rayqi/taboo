import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Food, Coding, Travel, getData } from './deck'



class Category extends React.Component {
    constructor() {
        super()
        this.state = { currentCategory: '' }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.topicContainer}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>CATEGORIES</Text>
                    </View>

                    <View style={[styles.topicContainer, styles.foodImage]} >
                        <TouchableOpacity onPress={() => {
                            navigate('Card', { category: Food })
                            // navigate('Category', { category: "dummy" })
                        }}>
                            <Image style={styles.foodImage} source={require('./images/foodbutton.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.topicContainer, styles.fullStackImage]}>
                        <TouchableOpacity onPress={() => { navigate('Card', { category: Coding }) }}>
                            <Image style={styles.fullstackImage} source={require('./images/fullstackbutton.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.topicContainer, styles.travelImage]}>
                        <TouchableOpacity onPress={() => {
                            const myFetchedCategory = getData('travel');
                            // console.log('***', getData("Travel"));
                            myFetchedCategory.then(data => {
                                navigate('Card', { category: data })
                            })

                        }}>
                            <Image style={styles.travelImage} source={require('./images/vintage-plane.png')} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View >)
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rosybrown'
    },
    topicContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        flex: .222,
        backgroundColor: 'rosybrown'
    },
    titleText: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    },
    foodImage: {
        flex: 1
    },
    travelImage: {
        flex: 1
    },
    fullstackImage: {
        flex: 1
    }
});

export default Category;