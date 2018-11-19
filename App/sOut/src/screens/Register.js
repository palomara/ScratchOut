import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    Image,
    KeyboardAvoidingView,
    Alert
} from 'react-native'
import {server, showError} from "../components/common";
import axios from  'axios'
import toast from 'react-native-simple-toast'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Register extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            usuario: "",
            email: "",
            password: "",
            confPassword: "",
            formtype: false
        }
    }

    singun = async () => {
        if(this.state.confPassword !== this.state.password){
            Alert.alert('Opa, algo deu errado', 'Sua senhas não são iguais')
        }else{
            try{
                await axios.post(`${server}/signup`,{
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                });

                toast.show('Cadastro realizado!', toast.LONG)

            }catch (err) {
                showError(err)
            }
            this.props.navigation.navigate('Login')
        }
    };



    render () {

        let formstage = null;
        if(this.state.formtype === false){
            // primeiro form
            formstage = <KeyboardAvoidingView>
            <View style={styles.form}>

                <View style={styles.highlightText}>
                    <Text style={styles.highlightText}>Antes de tudo,</Text>
                </View>

                <Text style={styles.questionText}>Como devemos te chamar?</Text>
                <View style={styles.inputField}>
                    <TextInput style={styles.input}
                               placeholder="nome" placeholderTextColor="#FFF"
                               onChangeText={(name) => this.setState({name})}
                               autoCapitalize="none"/>
                </View>

                <View style={styles.questionField}>
                </View>

                <View style={styles.nextField}>
                    <View></View>
                    <View style={styles.nextButton}>
                        <TouchableOpacity style={styles.nextButtonTouch} activeOpacity={0.5}
                                          onPress={() => this.setState({formtype: true})}>
                            <Image source={require('../../resources/images/icons/icon-nav_go-green.png')}/>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            </KeyboardAvoidingView> 
        }else{
            //segundo form
            formstage = <KeyboardAvoidingView>
            <View style={styles.form}>

                <View style={styles.highlightText}>
                    <Text style={styles.highlightText}>Bem-Vindo, {this.state.name == null ? 'convidado' : this.state.name}!</Text>
                </View>

                <Text style={styles.questionText}>Precisamos do seu e-mail, ele será sua credencial!</Text>
                <View style={styles.inputField} >
                    <TextInput style={styles.input}
                               placeholder= "email" placeholderTextColor="#FFF"
                               onChangeText={(email) => this.setState({email})}
                               autoCapitalize="none"/>
                </View>
                <View style={styles.questionField}>
                    <Text style={styles.questionText}>Insira uma senha</Text>
                </View>
                <View style={styles.inputField} >
                    <TextInput style={styles.input}
                               placeholder= "Digite uma senha" placeholderTextColor="#FFF"
                               onChangeText={(password) => this.setState({password})}
                               secureTextEntry={true}
                               autoCapitalize="none"/>
                </View>
                <View style={styles.questionField}>
                    <Text style={styles.questionText}>Confirme a senha</Text>
                </View>
                <View style={styles.inputField} >
                    <TextInput style={styles.input}
                               placeholder= "novamente" placeholderTextColor="#FFF"
                               onChangeText={(confPassword) => this.setState({confPassword})}
                               secureTextEntry={true}
                               autoCapitalize="none"/>
                </View>

                <View style={styles.questionField}>
                    <Text style={styles.questionText}></Text>
                </View>

                <View style={styles.nextField}>
                    <View style={styles.nextButton}>
                        <TouchableOpacity style={styles.nextButtonTouch} activeOpacity={0.5}
                                          onPress={this.singun}>
                            <Text style={styles.buttonok}>OK</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            </KeyboardAvoidingView>

            }


        return (
            <ImageBackground source={require('../../resources/images/turquoise-galaxy.png')} style={styles.container} blurRadius={2}>
                <View style={styles.statusBar}>
                    <StatusBar translucent={true} backgroundColor={'transparent'}/>
                </View>
                <View style={styles.container}>

                    <View style={styles.fixedNav}>
                        <TouchableOpacity style={styles.fixedNavArea} onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../resources/images/icons/icon-nav_back-white.png')}/>
                        </TouchableOpacity>
                    </View>

                    <KeyboardAvoidingView behavior="padding" style={styles.form}>

                        {formstage}


                    </KeyboardAvoidingView>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    /*Provisório*/

    buttonok: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#00ED74',
        alignItems: 'center'
    },

    container: {
        flex: 1,
        alignItems:'center',
        width: width,
        height: height,
    },

    form:{
        width: width * 0.88,
    },

    highlightText: {
        height: height / 16,
        fontFamily: 'Roboto Bold',
        fontSize: 26,
        color: '#FFFFFF',
        marginTop: 20
    },

    questionField: {
        height: height / 14,
        justifyContent: 'flex-end',
    },

    questionText:{
        fontFamily: 'Roboto Regular',
        fontSize: 17,
        color: '#FFFFFF',
        marginTop: 10
    },

    inputField:{
        height: height / 13,
        justifyContent: 'flex-end',
        borderBottomWidth: 2,
        borderColor: '#FFF',
    },

    input: {
        fontFamily: 'Roboto Light',
        fontSize: 22,
        color: '#FFF',
    },

    nextField:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    nextButton:{
        height: 70,
        width: 70,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: "#fff",
    },

    nextButtonTouch:{
        height: 70,
        width: 70,
        alignItems:'center',
        justifyContent: 'center',
    },
});
