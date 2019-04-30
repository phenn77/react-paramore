import React from 'react';
import {Image, ImageBackground, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: (tintColor) => <Icon name={'home'} size={20}/>
    }


    render() {
        const {navigate} = this.props.navigation;

        return (
            <ImageBackground source={require('../img/background.jpg')} style={styles.container} resizeMode={'stretch'}>
                <View style={styles.logoContainer}>
                    <Image source={require('../img/logo-2.png')} style={styles.logo} resizeMode={'center'}/>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null
    },
    logoContainer: {
        flex: 1,
        alignSelf: 'center',
    },
    logo: {
        height: 100,
    }
});