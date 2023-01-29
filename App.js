import { Button, StyleSheet, TextInput, View, Text, FlatList } from 'react-native';
import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      status: "",
      pessoas: [],
      loading: true
    }
  }
  componentDidMount() {
    this.getPessoas();
  }
  getPessoas = async () => {
    let url = "https://apiccb.cdamorais.com/selectall.php"
    let resposta = await fetch(url)
    let data = await resposta.json()
    this.setState({ pessoas: data[0]['Rows'], loading: false })

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

      let Data = { nome: nome, status: status }

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

  renderItem = ({ item }) => {

    console.log(item)
    return (
      <View style={Style.itemContainer}>
        <Text>{item.nome}</Text>
      </View>
    );
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
          {this.state.loading && <Text>Carregando...</Text>}
          {!this.state.loading && (
            <FlatList
              data={this.state.pessoas}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
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
  },    
  itemContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
});