import React, {Component} from 'react';
import {AsyncStorage, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import axios from "axios";

class SideMenu extends Component {
    logout = () => {
        delete axios.defaults.headers.common['Authorization'];
        AsyncStorage.removeItem('userData')
        this.props.navigation.navigate('Hall')
    };
    //TODO: Personalizar o side menu aqui.
    render () {
        return (
            <View>
                <View>
                    <Text>This is my fixed Header</Text>
                </View>
                <ScrollView>
                    <View>
                        <Text>AQUI VAI O CONTEUDO</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.logout()}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View>
                    <Text>This is my fixed footer</Text>
                </View>
            </View>
        );
    }
}

export default SideMenu;