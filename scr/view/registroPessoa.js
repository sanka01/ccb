import React, { Component } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";

class RegistroPessoa extends Component {

    constructor(props){
        super(props)
        this.state = {
            nome: "",
            status: ""
        }
    }
    register = () => {
        let nome = this.state.nome;
        let status = this.state.status
        if (!nome || !status) {
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

    render(){

        return(
            <View>
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
        </View>
 
        )
    }
}       
export default RegistroPessoa;

const Style = StyleSheet.create({
      txt: {
        borderBottomWidth: 1,
        borderBottomColor: 'tomato',
        marginBottom: 30,
        width: 100
      },
      button: {
        width: 30
      },    
})