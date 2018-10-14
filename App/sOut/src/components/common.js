import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ?
    'http://localhost:300' : 'http://10.0.2.2:3000';

function showError(err) {
    Alert.alert('Ocorreu um erro!', `Mensagem: ${err}`)
}

export {server, showError}
