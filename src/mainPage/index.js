import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class MainPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            films: [],
        }
    }

    componentDidMount() {
        this.fetchFilms();
    }

    fetchFilms() {
        fetch('https://swapi.co/api/films/', {
            method: 'GET',
        }).then(response => response.json())
            .then(json => {
                console.log("JSON=", json.results);
                var res = json.results;
                res.sort(function(a, b) {
                    return a.episode_id - b.episode_id;
                });
                this.setState({
                    films: res,
                });
            })
            .catch(error => {
            console.error(error);
            });
    }

    goToDetail() {
        
    }

    renderFilms = ({ item }) => (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                key={item.key}
                style={styles.companyContainer}
                onPress={() => this.goToDetail()}
                activeOpacity={0.8}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.episode}>{"Episode " + item.episode_id}</Text>
                </View>
                <View style={styles.mainTextContainer}>
                    <Text style={styles.description}>{item.opening_crawl}</Text>
                    <Text style={styles.moreDetail}>{"Director: " + item.director}</Text>
                    <Text style={styles.moreDetail}>{"Producer: " + item.producer}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

    render () {
        const { films } = this.state;
        return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={films}
                renderItem={this.renderFilms}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
        )
    }
}
