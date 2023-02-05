import { Picker } from "@react-native-picker/picker";
import React, { Component } from "react";
import { Button, TextInput, View } from "react-native";
import ListarCidades from "./listarCidades";
import { ListarComuns } from "./listarComuns";
import ListarFamilia from "./listarFamilia";
import { ListarInstrumentos } from "./listarInstrumentos";

const Style = require("./styles").styler
class RegistroPessoa extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: "",
            status: "0",
            cidade: "2",
            estado: "1",
            setor: "2",
            familia: "1",
            instrumento: "1"
        }
    }




    register = () => {
        if (!this.state.nome) {
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


    setCidade = (cidadeChild) => {
        this.setState({ cidade: cidadeChild })
    }
    setEstado = (estadoChild) => {
        this.setState({ estado: estadoChild })
    }

    setFamilia = (familiaChild) => {
        this.setState({ familia: familiaChild })
    }

    setInstrumento = (instrumentoChild) => {
        this.setState({ instrumento: instrumentoChild })
    }
    setSetor = (setorChild) => {
        this.setState({ setor: setorChild })
    }


    render() {

        return (
            <View>
                <TextInput
                    placeholder='Nome Completo'
                    placeholderTextColor={"grey"}
                    style={Style.textoInput}
                    onChangeText={nome => this.setState({ nome: nome })}
                />
                <Picker
                    selectedValue={this.state.status}
                    onValueChange={(itemValue, itemIndex) => {
                        this.setState({ status: itemValue })
                    }}
                >
                    <Picker.Item label="Aluno" value='0' />
                    <Picker.Item label="Reunião de Jovens e Menores" value='1' />
                    <Picker.Item label="Oficializado" value='2' />
                    <Picker.Item label="Não Oficializado" value='3' />
                </Picker>
                <ListarCidades estado={this.state.estado} cidade={this.setCidade} />
                <ListarFamilia familia={this.setFamilia} />
                <ListarInstrumentos familia={this.state.familia} instrumento={this.setInstrumento} />
                <ListarComuns setor={this.setSetor} cidade={this.state.cidade} />
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


