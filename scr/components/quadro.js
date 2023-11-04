import React, { Component } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Porcentagens } from "../components/porcentagens";
import StatusMusico from "../components/getStatus";
import { ListarBotoesComums } from "./listarBotoesComuns";
import { URL } from "@env";
const style = require("../components/styles").styler


export default class Quadro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cordas: 0,
            metais: 0,
            madeiras: 0,
            organistas: 0,
            total: 0,
            ofc: 0,
            nfc: 0,
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
        this.setState({
            cordas: dados[0]["cordas"], madeiras: dados[0]["madeira"], metais: dados[0]["metais"], total: dados[0]["musicos"],
            ofc: dados[0]["OFC"], nfc: dados[0]["NFC"],
            organistas: dados[0]["organistas"],
            musicos: dados[1], loading: false
        })
        if (dados[1]) {
            this.setState({
                comuns: dados[1]
            })
        }
        if(dados[2]){
            this.setState({
                musicos: dados[2]
            })
        }
    }
    getComuns({ item }) {
        return (
            <ListarBotoesComums
                nome={item.nome}
                id={item.id}
                navigation={this.props.navigation} />
        )

    }
    renderItem = ({ item }) => {
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
        var total = parseFloat(this.state.total)
        var nfc = parseFloat(this.state.nfc)
        var ofc = parseFloat(this.state.ofc)
        return (
            <>
                <Porcentagens
                    metais={this.state.metais}
                    madeiras={this.state.madeiras}
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
                                data={this.state.musicos}
                                renderItem={this.renderItem}
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
                                    data={this.state.comuns}
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