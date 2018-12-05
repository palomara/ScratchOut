import React, {Component} from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView,
    Image,
    TouchableOpacity
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class ForgotPassword extends Component {

    render() {
        return (
                <View style={styles.container}>
                    <KeyboardAvoidingView behavior="padding" style={styles.container}>
                        <StatusBar translucent={true} backgroundColor={'transparent'}/>
                        <View style={styles.logoField}>
                            <Image style={styles.logo} source={require('../../resources/images/logos/logo-sout.png')}/>
                        </View>
                        <View style={styles.textArea}>
                            <Text style={styles.textTop}>Esqueceu sua <Text style={styles.textTopBold}>senha</Text>?
                                {"\n"} {"\n"}<Text style={styles.textBottom}>Digite seu e-mail para solicitar a troca de senha.</Text>
                            </Text>
                        </View>
                    <View style={styles.form}>
                        <View style={styles.inputFieldEmail}>
                            <TextInput style={styles.input}
                                       placeholder="email"
                                       placeholderTextColor="#00ce67"
                                       returnKeyType="next"
                                       keyboardType="email-address"
                                       autoCorrect={false}
                                       autoCapitalize="none"/>
                        </View>
                    </View>
                        <View style={styles.buttonArea}>
                            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Hall')}>
                                <Text style={styles.textButton}> Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>


        )
    }

}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        width: width,
        height: height

    },
    form: {
        width: width * 0.9,
    },
    input: {
        fontFamily: 'Roboto Light',
        fontSize: 20,
        color: "#00ce67",
        flex: 1
    },
    inputFieldEmail: {
        borderBottomWidth: 2,
        borderColor: '#00ce67',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 16
    },
    logoField: {
        alignItems:'center',
        justifyContent: 'center',

    },
    logo: {
        width: width * 0.90,
        marginBottom: 60
    },
    textTop: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#006F77',
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    textTopBold: {
        fontFamily: 'Roboto Bold',
    },
    textBottom: {
        fontSize: 18,

    },
    textArea: {
        marginBottom: 50
    },
    buttonArea: {
        width: width * 0.80,
        height: height / 12.8,
        marginTop: height / 50,
        backgroundColor: "#fff",
        borderRadius: 30,
        marginBottom: 10,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textButton: {
        fontFamily: 'Roboto',
        fontSize: 17,
        color: '#00ce67'
    }


})