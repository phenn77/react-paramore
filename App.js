import React, {Component} from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import {Home} from './app/components/Home';
import {Member} from './app/components/Member';
import {Albums} from './app/components/Albums';

const NavigationApp = TabNavigator({
    Home: {screen: Home},
    Member: {screen: Member},
    Albums: {screen: Albums}
}, {
    tabBarPosition: 'bottom',
    //swipeEnabled: false,
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        style: {
            backgroundColor: 'transparent',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0
        }
    }
});

export default class App extends Component {
    render() {
        //console.disableYellowBox = true;
        return (
            <NavigationApp/>
        );
    }
}
