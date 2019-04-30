import React, {Component} from 'react';
import {Image, View, Text, StyleSheet, Modal, TouchableOpacity, Button, FlatList, ScrollView} from 'react-native';
import {albumData} from '../data/AlbumData';

export class AlbumView extends Component {
    render() {
        const chosenAlbum = albumData.filter(data => {
            return data.key === this.props.chosen
        });

        var value = [];
        const mapping = chosenAlbum.map((idx) => (
            value = idx
        ));

        return (
            <View style={styles.container}>
                <Modal visible={this.props.show}
                       onRequestClose={() => this.props.setModalVisible(false)}
                >
                    <ScrollView>
                        <View style={styles.body}>
                            <Image source={value.pict} style={styles.image}/>
                            <View style={styles.description}>
                                <View>
                                    <Text style={styles.info}>
                                        Album Name
                                    </Text>
                                    <Text style={styles.info}>
                                        Release Year
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.albumInfo}>
                                        {value.name}
                                    </Text>
                                    <Text style={styles.albumInfo}>
                                        {value.year}
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.track}>
                                    Tracklist
                                </Text>
                                <FlatList
                                    data={value.tracklist}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={(item) =>
                                        <Text style={{textAlign: 'center'}}>
                                            {item.item}
                                        </Text>
                                    }
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.closeModal}>
                            <Button onPress={() => {
                                this.props.setModalVisible(false)
                            }}
                                    title={'Close'}
                            >
                                Close Modal
                            </Button>
                        </TouchableOpacity>
                    </ScrollView>
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
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
    body: {
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20
    },
    closeModal: {
        padding: 30,
        marginRight: 80,
        marginLeft: 80
    },
    description: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10
    },
    info: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginRight: 10
    },
    albumInfo: {
        textAlign: 'right',
        color: 'red'
    },
    track: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5
    }
});