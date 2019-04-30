import React, {Component} from 'react';
import {TextInput, View, StyleSheet, Button, Text} from 'react-native';

export class TrainingInput extends React.Component {
    state = {
        placeName: '',
        places: []
    };

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }

        this.setState(prevState => {
            return {
                places: prevState.places.concat(prevState.placeName)
            }
        });
    }

    render() {
        const placesOutput = this.state.places.map((place, i) => (
            <ListItem
                key={i}
                placeName={place}
                onItemPressed={() => props.onItemDeleted(i)}
            />
        ));

        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.state.placeName}
                        placeholder={'an awesome place'}
                        onChangeText={this.placeNameChangedHandler}
                        style={styles.placeInput}
                    />

                    <Button title={'Add'}
                            style={styles.placeButton}
                            onPress={this.placeSubmitHandler}
                    />
                </View>
                <View style={styles.listContainer}>
                    {placesOutput}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inputContainer: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    },
    listContainer: {
        width: '100%'
    }
})