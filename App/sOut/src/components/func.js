import {AsyncStorage} from "react-native";

export  const login = () => {
  // posteriormente sera substituido por um link web
  fetch('http://10.0.2.2:3000/users', {
    method: 'POST',
    headers: {
      /*Accept: 'application/json'*/
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "usuario": this.state.usuario,
      "senha": this.state.senha,
    }),
  })

  .then((response) => response.json())
  .then((res) =>{

    if(res.success === true){
      AsyncStorage.setItem('token', '1');
      this.props.navigation.navigate('Home')

    }else{
      this.setState({textoresult: "parece que você errou sua senha ou email"})
    }
  })
  .done()
};
