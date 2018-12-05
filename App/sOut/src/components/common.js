import { Alert, Platform } from 'react-native'

const server = 'http://10.0.2.2:3000'
    //webservice heroku: https://powerful-sierra-29350.herokuapp.com
//const server = 'https://powerful-sierra-29350.herokuapp.com'
function showError(err) {
    Alert.alert('Ocorreu um erro!', `Mensagem: ${err}`)
}

export {server, showError}
