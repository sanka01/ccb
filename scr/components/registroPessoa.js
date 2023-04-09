import { Picker } from "@react-native-picker/picker";
import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
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
            email: "",
            telefone: "",
            status: "0",
            cidade: "2",
            estado: "1",
            setor: "2",
            familia: "1",
            instrumento: "1",
            setores: [],
            cidades: [],
            instrumentos: [],
            familias: []
        }
    }


    getDados = async () => {
        let url = "https://apiccb.cdamorais.com/selectdadoscadastro.php"
        let resposta = await fetch(url)
        let data = await resposta.json()
        this.setState({
            cidades: data[1],
            familias: data[2],
            instrumentos: data[3],
            setores: data[4]
        })
    }

    componentDidMount() {
        this.getDados()
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
                email: this.state.email,
                telefone: this.state.telefone,
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

        for (let i = 0; i < this.state.setores.length; i++) {
            if (this.state.setores[i].cidade === cidadeChild) {
                this.setState({ setor: this.state.setores[i].id });
                break;
            }
        }

        this.setState({ cidade: cidadeChild })

    }
    setEstado = (estadoChild) => {
        this.setState({ estado: estadoChild })
    }

    setFamilia = (familiaChild) => {
        for (let i = 0; i < this.state.instrumentos.length; i++) {
            if (this.state.instrumentos[i].familia === familiaChild) {
                this.setState({ instrumento: this.state.instrumentos[i].id });
                break;
            }
        }

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
                <TextInput
                    placeholder='E-mail'
                    placeholderTextColor={"grey"}
                    style={Style.textoInput}
                    onChangeText={email => this.setState({ email: email })}
                />
                <TextInput
                    placeholder='Telefone'
                    placeholderTextColor={"grey"}
                    style={Style.textoInput}
                    onChangeText={telefone => this.setState({ telefone: telefone })}
                />
                <Text>Status</Text>
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
                <Text>Cidade</Text>
                <ListarCidades estado={this.state.estado} cidade={this.setCidade} />
                <Text>Comum</Text>
                <ListarComuns setor={this.setSetor} cidade={this.state.cidade} />
                <Text>Familia de instrumento</Text>
                <ListarFamilia familia={this.setFamilia} />
                <Text>Instrumento</Text>
                <ListarInstrumentos familia={this.state.familia} instrumento={this.setInstrumento} />
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


