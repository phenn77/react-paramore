import React from 'react';
import {Image, ImageBackground, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Profile} from './child/Profile';
import {personel} from './data/AlbumData';

export class Member extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Member',
        tabBarIcon: (tintColor) => <Icon name={'users'} size={20}/>
    };

    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
        };
    }

    setModalVisible = (visible) => {
        this.setState({
            modalVisible: visible
        })
    }

    imageClicked = (key) => {
        this.setState({
            modalVisible: true,
            chosen: key
        });
    }

    render() {
        const {navigate} = this.props.navigation;

        const pictList = personel.map((idx) => (
            <TouchableOpacity key={idx.name}
                              onPress={() => {
                                  this.imageClicked(idx.key)
                              }}
            >
                <Image source={idx.pict} style={styles.image}/>
            </TouchableOpacity>
        ));

        return (
            <ImageBackground source={require('../img/background-2.jpg')}
                             style={styles.container}
                             resizeMode={'stretch'}>
                <View style={styles.picContainer}>
                    {pictList}
                </View>

                <Profile show={this.state.modalVisible}
                         chosenChar={this.state.chosen}
                         setModalVisible = {(bool)=> this.setModalVisible(bool)}/>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    picContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        marginLeft: 30,
        marginRight: 30
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 20,
        resizeMode: 'cover',
        marginHorizontal: 5
    }
});