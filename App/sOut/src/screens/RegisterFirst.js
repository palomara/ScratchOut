import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class RegisterFirst extends Component<Props> {
    render () {
        return (
            <ImageBackground source={require('../../resources/images/green-galaxy.png')} style={styles.background} blurRadius={1}>
                <View style={styles.container}>
                    <View style={styles.form}>

                        <View style={styles.questionField}>
                            <Text style={styles.textBold}>Antes de tudo,</Text>
                            <Text style={styles.text}>Como devemos te chamar?</Text>
                            <View style={styles.inputField} >
                                <TextInput style={styles.input}
                                           placeholder= "Nome" placeholderTextColor="#FFF"
                                           onChangeText={texto => this.setState({nome: texto})}
                                           autoCapitalize="none"/>
                            </View>
                            <Text style={styles.text}> E como se identifica?</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
    background: {
        width: width,
        height: height
    },
    questionField: {
        marginBottom: height / 2
    },
    text:{
        fontFamily: 'Roboto Regular',
        fontSize: 18,
        color: '#FFFFFF',
        margin: 20

    },
    textBold: {
        fontFamily: 'Roboto Bold',
        fontSize: 26,
        color: '#FFFFFF',
        margin: 20,
    },
    form:{
        width: width * 0.88,
    },
    input: {
        fontFamily: 'Roboto Light',
        fontSize: 20,
        color: '#FFFFFF',
        flex: 1
    },
    inputField:{
        borderBottomWidth: 2,
        borderColor: '#FFFFFF',
        marginBottom: 16,
        flexDirection: 'row'
    },
})
