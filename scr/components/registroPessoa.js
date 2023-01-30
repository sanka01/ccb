import React, { Component } from "react";
import { TextInput, Button, View, StyleSheet, Text } from "react-native";
import ListarCidades from "./listarCidades";
import ListarEstados from "./listarEstados";

class RegistroPessoa extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: "",
            status: "",
            cidade: "",
            estado: "",
            setor: "",
            familia: "",
            instrumento: ""
        }
    }


  
    register = () => {
        if (!nome) {
            alert("Erro, campo obrigatorio faltando")
        } else {
            let insertAPIURL = "https://apiccb.cdamorais.com/inserir.php"

            let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            let Data = {
                nome: this.state.nome,
                status: this.state.status,
                cidade: this.state.cidade,
                estado: this.state.estado,
                setor: this.state.setor,
                familia: this.state.familia,
                instrumento: this.state.instrumento,
            }

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


    setCidade = (cidadeChild) =>{
        this.setState({cidade: cidadeChild})
    }
    setEstado = (estadoChild) => {
        this.setState({estado: estadoChild})
    }

    render() {

        return (
            <View>
                <TextInput
                    placeholder='Nome'
                    placeholderTextColor={"grey"}
                    style={Style.txt}
                    onChangeText={nome => this.state.nome = nome}
                />
                <ListarEstados estado={this.setEstado}/>
                <ListarCidades  estado={this.state.estado} cidade={this.setCidade} />
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