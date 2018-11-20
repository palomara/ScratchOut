import React, {Component} from 'react';
import {
    AsyncStorage,
    Dimensions,
    Image,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {Avatar} from 'react-native-elements'
import axios from "axios"


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class SideMenu extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: ''
        }
    }
    //TODO: corigir bug de atualização de props user info (quando troca de usuário as infos não atualizam)
    componentDidMount = async () => {
        const json = await AsyncStorage.getItem('userData');
        const userData = JSON.parse(json) || {};

        this.setState({email: userData.email})
        this.setState({nome: userData.nome})

    };

    logout = () => {
        delete axios.defaults.headers.common['Authorization'];
        AsyncStorage.removeItem('userData')
        this.props.navigation.navigate('Hall')
    };

    //TODO: Personalizar o side menu aqui.
    //TODO: Verificar esquemas de cores.
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Avatar
                        width={160}
                        rounded
                        containerStyle={{marginLeft: 70, borderWidth: 2, borderColor: '#00ce67', borderStyle:'solid' }}
                        icon={{name: 'user', type: 'font-awesome'}}
                        onPress={() => this.props.navigation.navigate('Profile')}
                        onLongPress={() => console.warn('ir para configuração') /*this.props.navigation.navigate('Config')*/}
                        activeOpacity={0.7}
                    />
                    <View style={styles.userInfo}>
                        <Text style={styles.userInfoItemNome}>{this.state.nome}</Text>
                        <Text style={styles.userInfoItemEmail}>{this.state.email}</Text>
                    </View>
                </View>

                <ScrollView syle={styles.containerItem}>

                    <TouchableOpacity  style={styles.itemSide} onPress={() => {this.props.navigation.navigate('CalendarsList')}}>
                        <Image  source={require('../../resources/images/icons/icon-due_date@2.png')}/>
                        <Text style={styles.textSide} > Calendário</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemSide}>
                        <Image style={{width: 25, height: 25, marginLeft: 4}} source={require('../../resources/images/icons/icon-faq-green.png')}/>
                        <Text style={styles.textSide}>   FAQ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.logout()} style={styles.itemSide}>
                        <Image style={{width: 25, height: 25, marginLeft: 4}} source={require('../../resources/images/icons/logout.png')}/>
                        <Text style={styles.textSide} >   Sair</Text>
                    </TouchableOpacity>
                </ScrollView>
                    <TouchableOpacity onPress={()=>{ Linking.openURL('https://google.com')}} style={styles.footer}>
                        <Image style={{width: 20, height: 20, marginRight: 10}} source={require('../../resources/images/icons/bugIcon.png')}/>
                        <Text>Reportar</Text>
                    </TouchableOpacity>
                <View style={styles.emptyView}></View>
            </View>
        );
    }
}

export default SideMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 5,
        height: 5,
    },

    emptyView: {
        height: height * 0.02,
        width: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        flexDirection: 'row',
        height: 200,
        width: 300,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },

    footer: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    userInfo: {
        flexDirection: 'column',
        height: 200,
        width: 250,
        padding: 5,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    userInfoItemNome: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#f8ffff',
        fontWeight: 'bold',
    },
    userInfoItemEmail: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: '#f8ffff',
    },
    itemSide: {
        fontFamily: 'Roboto',
        fontSize: 30,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: 135


    },
    containerItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#aba0ac',

    },

    textSide: {
        fontFamily: 'Roboto',
        color: '#000',
        fontSize: 16
    }

});