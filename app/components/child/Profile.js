import React, {Component} from 'react';
import {Image, View, Text, StyleSheet, Modal, TouchableOpacity, Button} from 'react-native';
import {personel} from "../data/AlbumData";

export class Profile extends Component {
    render() {

        const list = personel.filter(data => {
            return data.key === this.props.chosenChar
        });

        var selected = [];

        const mapping = list.map((idx) => (
            selected = idx
        ));

        return (
            <View style={styles.container}>
                <Modal visible={this.props.show}
                       onRequestClose={() => this.props.setModalVisible(false)}
                >
                    <View style={styles.body}>
                        <Image source={selected.pict} style={styles.image}/>
                        <Text>{selected.name}</Text>
                    </View>
                    <TouchableOpacity style={styles.closeModal}>
                        <Button onPress={() => {this.props.setModalVisible(false)}}
                                title={'Close Modal'}
                        >
                            Close Modal
                        </Button>
                    </TouchableOpacity>
                </Modal>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: 100,
        height: 150
    },
    body: {
      alignItems: 'center',
        marginTop:20
    },
    closeModal: {
        padding: 30,
        marginRight: 80,
        marginLeft: 80
    }
});