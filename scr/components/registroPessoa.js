import { Picker } from "@react-native-picker/picker";
import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { statusMusico } from "./getStatus";
import ListarCidades from "./listarCidades";
import { ListarComuns } from "./listarComuns";
import ListarFamilia from "./listarFamilia";
import { ListarInstrumentos } from "./listarInstrumentos";
import { EXPO_PUBLIC_URL as URL } from '@env'

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
            familias: [],
            loading: true
        }
        props.navigation.addListener('focus', () => this.resetState())
    }

    resetState() {
        this.setState({
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
        })
    }

    getDados = async () => {
        let url = URL + "selectdadoscadastro.php"
        let resposta = await fetch(url)
        let data = await resposta.json()
        this.setState({
            cidades: data[1],
            familias: data[2],
            instrumentos: data[3],
            setores: data[4],
            loading: false
        })
    }

    componentDidMount() {
        this.getDados()
    }

    register = () => {
        if (!this.state.nome) {
            alert("Erro, campo obrigatorio faltando")
        } else {
            let insertAPIURL = URL + "inserir.php"

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
                    this.resetState()
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
                    value={this.state.nome}
                    onChangeText={nome => this.setState({ nome: nome })}
                />
                <TextInput
                    placeholder='E-mail'
                    placeholderTextColor={"grey"}
                    style={Style.textoInput}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email: email })}
                />
                <TextInput
                    placeholder='Telefone'
                    placeholderTextColor={"grey"}
                    style={Style.textoInput}
                    value={this.state.telefone}
                    onChangeText={telefone => this.setState({ telefone: telefone })}
                />
                <Text>Status</Text>
                <Picker
                    selectedValue={this.state.status}
                    onValueChange={(itemValue, itemIndex) => {
                        this.setState({ status: itemValue })
                    }}
                >
                    {statusMusico.map(({ name: label }, value) =>
                        <Picker.Item key={value.id} label={label} value={value}></Picker.Item>)}
                </Picker>
                {this.state.loading && <Text>Carregando...</Text>}
                {!this.state.loading && (
                    <>                
                    <Text>Cidade</Text>
                        <ListarCidades estado={this.state.estado} cidade={this.setCidade} cidades={this.state.cidades} />
                        <Text>Comum</Text>
                        <ListarComuns setor={this.setSetor} cidade={this.state.cidade} setores={this.state.setores}/>
                        <Text>Familia de instrumento</Text>
                        <ListarFamilia familia={this.setFamilia} familias={this.state.familias} />
                        <Text>Instrumento</Text>
                        <ListarInstrumentos familia={this.state.familia} instrumento={this.setInstrumento} instrumentos={this.state.instrumentos}/>
                    </>

                )}
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


