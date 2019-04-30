import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, ImageBackground, TouchableOpacity, FlatList, Text, StyleSheet, View, ScrollView} from 'react-native';

import {AlbumView} from './child/AlbumView';
import {albumData} from './data/AlbumData';

export class Albums extends Component {
    static navigationOptions = {
        tabBarIcon: <Icon name={'music'} size={20}/>,
    };

    constructor(props) {
        super(props);

        this.state = {
            FlatListItems: albumData,
            modalVisible: false,
            albumChosen: 1
        }
    }

    imageClicked(item) {
        this.setState({
            modalVisible: true,
            albumChosen: item
        });
    }

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        });
    }

    render() {

        return (
            <View style={styles.MainContainer}>
                <ScrollView>
                    <FlatList
                        data={this.state.FlatListItems}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) =>
                            <View style={styles.albumList}>
                                <TouchableOpacity key={item.name} onPress={() => this.imageClicked(item.key)}
                                                  >
                                    <Image source={item.pict} style={styles.album}/>
                                </TouchableOpacity>
                                <View style={styles.albumName}>
                                    <Text style={{fontWeight: 'bold'}}>Album Name</Text>
                                    <Text>{item.name}</Text>
                                    <View style={{flexDirection: 'row', marginTop: 10}}>
                                        <Text style={{fontWeight: 'bold'}}>Release Year : </Text>
                                        <Text>{item.year}</Text>
                                    </View>
                                </View>
                            </View>
                        }
                    />
                </ScrollView>
                <AlbumView
                    show={this.state.modalVisible}
                    setModalVisible={(bool) => this.setModalVisible(bool)}
                    chosen={this.state.albumChosen}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    MainContainer: {

// Setting up View inside content in Vertically center.
        justifyContent: 'center',
        flex: 1,
        margin: 10

    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    album: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    albumList: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'grey',
        marginBottom: 10
    },
    albumName: {
        marginTop: 10,
        //flexDirection: 'row'
    }
});