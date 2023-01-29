import { Button, StyleSheet, TextInput, View, Text, FlatList } from 'react-native';
import React, { Component } from 'react';
import renderPessoa from './scr/view/renderPessoa';
import RegistroPessoa from './scr/view/registroPessoa';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

 
  render() {


    return (
      <View style={Style.main}>
       <RegistroPessoa/>
        <View>
          {this.state.loading && <Text>Carregando...</Text>}
          {!this.state.loading && (
            <FlatList
              data={this.state.pessoas}
              renderItem={renderPessoa}
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
    padding: 130,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});