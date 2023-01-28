import { Button, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      status: "",
      pessoas: []
    }
  }

  register = () => {
    let nome = this.state.nome;
    let status = this.state.status
    if (nome.length === 0 || status.length === 0) {
      alert("Erro, campo obrigatorio faltando")
    } else {
      let insertAPIURL = "https://apiccb.cdamorais.com/inserir.php"

      let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      let Data = { nome: nome, status: status}

      fetch(insertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
        .then((response) => response.json())
        .then((response) => {
          alert(response[0].Message);
        })
        .catch((error) => {
          alert("Error" + error);
        })


    }
  }

  render() {
  
    return (
      <View style={Style.main}>
        <TextInput
          placeholder='Nome'
          placeholderTextColor={"grey"}
          style={Style.txt}
          onChangeText={nome => this.state.nome = nome}
        />
        <TextInput
          placeholder='Status'
          placeholderTextColor={"grey"}
          keyboardType="numeric"
          style={Style.txt}
          onChangeText={status => this.state.status = status}
        />
        <Button
          style={Style.button}
          title='Registrar'
          onPress={this.register}
        />
        <View>
          
        </View>
      </View>
    )
  }
}
export default App;
const Style = StyleSheet.create({
  main: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  green: {
    backgroundColor: '#3BDB40'
  },
  white: {
    backgroundColor: '#fff'
  },
  widthfull: {
    width: '100%'
  },
  txt: {
    borderBottomWidth: 1,
    borderBottomColor: 'tomato',
    marginBottom: 30,
    width: 100
  },
  button: {
    width: 30
  }
});