/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    Image,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight, AsyncStorage,
} from 'react-native';

import ImagePicker from 'react-native-image-picker'
import FixedMenu from '../components/FixedMenu';
import MyBackButton from '../components/MyBackButton'
import { Avatar } from 'react-native-elements'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Profile extends Component {




    constructor(props) {
        super(props);
        this.state = {
            imagePath: '',
            imageHeight: '',
            imageWidth: '',
            email: ''
        }
    }
    componentDidMount = async () => {
        const json = await AsyncStorage.getItem('userData');
        const userData = JSON.parse(json) || {};

        this.setState({ email: userData.email })

    }

    openImagePicker() {
        const options = {
            title: 'Selecione a Foto de Perfil',
            storageOptions: {
                skipBackup: true,
                path: 'Images'
            }
        }
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker')
            }
            else if (response.error) {
                console.log('Error' + response.error)
            }
            else if (response.customButton) {
                console.log('User tapped custom button' + response.customButton)
            }
            else {
                this.setState({
                    imagePath: response.uri,
                    imageHeight: response.height,
                    imageWidth: response.width
                })
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='transparent' barStyle='dark-content' />
                <View style={styles.fixedNav}>
                    <MyBackButton style={styles.fixedNav} />
                    <Text style={styles.title}>Perfil</Text>
                    <View style={styles.emptyView}></View>
                </View>

                <ScrollView style={styles.mainView}>
                    <View style={styles.editView}>
                        <View style={{ paddingLeft: 20 }}>
                            <Avatar
                                width={130}
                                rounded
                                containerStyle={{ marginLeft: 70, borderWidth: 2, borderColor: '#00ce67', borderStyle: 'solid' }}
                                source={{ uri: this.state.imagePath }}
                                onPress={this.openImagePicker.bind(this)}
                                activeOpacity={0.7}
                            />
                            <Text>{this.state.imagePath}</Text>
                        </View>

                        <TouchableOpacity style={styles.editView} onPress={() => { this.props.navigation.navigate('Config') }}>
                            <Image source={require('../../resources/images/icons/icon-settings-green.png')} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.otherTitle}>E-MAIL</Text>
                        <Text style={styles.contentInfoUser}>{this.state.email}</Text>
                        <Text style={styles.otherTitle}>PLANO</Text>
                        <Text style={styles.contentInfoUser}>Freemium</Text>
                    </View>
                </ScrollView>

                <FixedMenu />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'

    },

    fixedNav: {
        flexDirection: 'row',
        height: height * 0.1,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        marginBottom: 20,
        elevation: 3,
        position: 'relative'
    },

    fixedNavArea: {
        height: height * 0.08,
        width: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    emptyView: {
        height: height * 0.08,
        width: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#00ce67',
        alignItems: 'center',
        justifyContent: 'center'
    },

    otherTitle: {
        fontFamily: 'Roboto Bold',
        fontSize: 10,
        color: '#A5A5A5',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        marginTop: height * 0.03,
        paddingBottom: height * 0.003,
        marginLeft: width * 0.06,

    },

    contentInfoUser: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#00ce67',
        marginLeft: width * 0.06,
    },

    mainView: {
        height: height * 0.6,
        width: width,
    },

    editView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        position: 'relative',
        paddingLeft: width * 0.1,
        paddingRight: width * 0.1,
        marginBottom: height * 0.01,
    }

});