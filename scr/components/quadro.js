import React, { Component } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Porcentagens } from "../components/porcentagens";
import StatusMusico from "../components/getStatus";
import { ListarBotoesComums } from "./listarBotoesComuns";
import { URL } from "@env";
const style = require("../components/styles").styler

export default class Quadro extends Component {
    static handleDados([head, dados]) {
        return {
                ...head,
                dados,
            }
    }
    constructor(props) {
        super(props)
        this.state = {
            cordas: 0,
            metais: 0,
            madeira: 0,
            organistas: 0,
            total: 0,
            OFC: 0,
            NFC: 0,
            renderizaMusicos: props.renderizaMusicos,
            renderizaComuns: props.renderizaComuns,
            loading: true,
            musicos: [],
            url: props.url
        }
    }
    componentDidMount() {
        this.getDados()
    }
    async getDados() {
        let url = URL + this.props.url
        let data = this.props.data
        let resposta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        let dados = await resposta.json()
        this.setState({...Quadro.handleDados(dados), loading: false})
    }
    getComuns({ item }) {
        return (
            <ListarBotoesComums
                nome={item.nome}
                id={item.id}
                navigation={this.props.navigation} />
        )

    }
    renderMusico = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditarMusico', { id: item.id })}>
                <View style={style.itemMusico}>
                    <Text style={style.tituloMusico}>{item.nome_pessoa} | {item.setor}</Text>
                    <Text style={style.tituloMusico}>Instrumento: {item.nome_instrumento}</Text>

                    {item.telefone && <Text>Telefone: {item.telefone}</Text>}
                    {item.email && <Text>Email: {item.email}</Text>}
                    <StatusMusico status={item.status} />
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        var total = parseFloat(this.state.musicos)
        var nfc = parseFloat(this.state.NFC)
        var ofc = parseFloat(this.state.OFC)
        return (
            <>
                <Porcentagens
                    metais={this.state.metais}
                    madeiras={this.state.madeira}
                    cordas={this.state.cordas}
                    organistas={this.state.organistas} />
                <View style={style.row}>
                    <Text style={style.quadro_info}>
                        Total de músicos = {total}
                    </Text>

                    <Text style={style.quadro_info}>
                        OFC = {ofc}
                    </Text>

                    <Text style={style.quadro_info}>
                        NFC = {nfc}
                    </Text>

                </View>
                {this.state.renderizaMusicos && (
                    this.state.loading
                        ? <Text>Carregando...</Text>
                        : (

                            <FlatList
                                data={this.state.dados}
                                renderItem={this.renderMusico}
                                keyExtractor={item => item.id}
                                contentContainerStyle={{ paddingBottom: 300 }}


                            />
                        ))}
                {this.state.renderizaComuns && (
                    this.state.loading ?
                        <Text>Carregando...</Text>
                        : (
                            <>
                                <TouchableOpacity style={[style.botao, { margin: 10 }]} onPress={
                                    () => this.props.navigation.navigate('TabelaMusicosCidade', {
                                        cidade: this.props.route.params.cidade,
                                        id_cidade: this.props.route.params.id_cidade
                                    })
                                }>
                                    <Text style={style.texto}>Lista Geral</Text>
                                </TouchableOpacity>
                                <FlatList
                                    data={this.state.dados}
                                    renderItem={this.getComuns.bind(this)}
                                    keyExtractor={(item, index) => item.toString()}

                                />
                            </>
                        )
                )}
            </>

        )
    }

}