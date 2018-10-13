import {AsyncStorage} from "react-native";

export const login = (usuario, senha) => {
  // posteriormente sera substituido por um link web
  fetch('http://10.0.2.2:3000/users', {
    method: 'POST',
    headers: {
      /*Accept: 'application/json'*/
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "usuario": usuario,
      "senha": senha,
    }),
  })

  .then((response) => response.json())
  .then((res) => {

    if (res.success === true) {
      console.warn(res.usuario);
      AsyncStorage.setItem('token', '1');
      this.props.navigation.navigate('Home')

    } else {
      this.setState({textoresult: "parece que você errou sua senha ou email"})
    }
  })
  .done()

};
