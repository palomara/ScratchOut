import React, {Component} from 'react';
import { StyleSheet,
    View,
    Image,
    TextInput,
    Platform,
    Text,
    Button,
    TouchableOpacity,
    Dimensions } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class LoginScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Image resizeMode="contain" source={require('./resources/img/LogoWhite.png')} style={styles.image} />
                <Image
                    source={require('./resources/img/Background.png')}
                    style={styles.backgroundImage}
                />
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder={"email"}
                        placeholderTextColor={"#FFFFFF"}
                        onChangeText={text => this.setState({usuario: text})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={"senha"}
                        placeholderTextColor={"#FFFFFF"}
                        onChangeText={text => this.setState({senha: text})}
                    />
                </View>

            </View>
        );
    }
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        // fontFamily: 'Roboto Light',
        fontSize: 20,
        width: DEVICE_WIDTH - 40,
        height: 30.14,
        /* marginHorizontal: 20,
         paddingLeft: 45,
         borderRadius:20, */
        color: '#FFFFFF',

    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        resizeMode: 'cover',
        width: viewportWidth,
        height: viewportHeight,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height:  100,
        position: 'absolute'

    },
});

