import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";
import StatusMusico from "../components/getStatus";
import { Picker } from "@react-native-picker/picker";

export class EditarMusico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            nome: "",
            status: 0,
            id_instrumento: 0,
            id_setor: 0,
            telefone: "",
            instrumentos: [],
            setores: [],
        };
    }

    getMusico = async () => {
        let url = "https://apiccb.cdamorais.com/selectMusico.php";
        let data = {
            id: 22, //this.props.route.params.id
        };
        let resposta = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
        });
        let dados = await resposta.json();
        this.setState({
            id: dados.id,
            nome: dados.Nome,
            status: dados.Status,
            id_instrumento: dados.id_instrumento,
            id_setor: dados.id_setor,
            telefone: dados.telefone,
        });
    };

    getInstrumentos = async () => {
        let url = "https://apiccb.cdamorais.com/selectInstrumento.php";
        let resposta = await fetch(url);
        let dados = await resposta.json();
        this.setState({
            instrumentos: dados,
        });
    };

    getSetores = async () => {
        let url = "https://apiccb.cdamorais.com/selectSetor.php";
        let resposta = await fetch(url);
        let dados = await resposta.json();
        this.setState({
            setores: dados,
        });
    };

    componentDidMount() {
        this.getMusico();
        this.getInstrumentos();
        this.getSetores();
    }

    atualizarMusico = async () => {
        let url = "https://apiccb.cdamorais.com/atualizarMusico.php";
        let data = {
            id: this.state.id,
            nome: this.state.nome,
            status: this.state.status,
            id_instrumento: this.state.id_instrumento,
            id_setor: this.state.id_setor,
            telefone: this.state.telefone,
        };
        let resposta = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
        });
        let dados = await resposta.json();
        if (dados.success) {
            alert("Dados atualizados com sucesso!");
        } else {
            alert("Erro ao atualizar os dados.");
        }
    };

    render() {
        return (
            <View>
                <TextInput
                    value={this.state.nome}
                    onChangeText={(value) => this.setState({ nome: value })}
                />
                <Picker
                    selectedValue={this.state.status}
                    onValueChange={(value) => this.setState({ status: value })}
                >
                    <Picker.Item label="Ativo" value="1" />
                    <Picker.Item label="Inativo" value="2" />
                </Picker>
                <Picker
                    selectedValue={this.state.instrumento}
                    onValueChange={(value) => this.setState({ instrumento: value })}
                >
                    <Picker.Item label="Violino" value="1" />
                    <Picker.Item label="Viola" value="2" />
                </Picker>
                <Picker
                    selectedValue={this.state.setor}
                    onValueChange={(value) => this.setState({ setor: value })}
                >
                    <Picker.Item label="Setor A" value="1" />
                    <Picker.Item label="Setor B" value="2" />
                </Picker>
                <Button title="Salvar" onPress={this.atualizarMusico} />
            </View>

        )
    }
}      