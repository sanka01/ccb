import React, { Component } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Porcentagens } from "../components/porcentagens";
import StatusMusico from "../components/getStatus";
import Quadro from "../components/quadro";

const style = require("../components/styles").styler

export class TabelaMusicosCidade extends Component {
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
            musicos: []
        }
    }

    componentDidMount() {
        this.getDados()
    }
    getDados = async () => {
        let url = "https://apiccb.cdamorais.com/selectDadosCidade.php"
        let data = {
            cidade: this.props.route.params.id_cidade
        }
        let resposta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        let dados = await resposta.json()
        this.setState({
            cordas: dados[0]["cordas"], madeiras: dados[0]["madeira"], metais: dados[0]["metais"], total: dados[0]["musicos"],
            ofc: dados[0]["OFC"], nfc: dados[0]["NFC"],
            organistas: dados[0]["organistas"],
            musicos: dados[2], loading: false
        })

    }

    render() {
        var total = parseFloat(this.state.total)
        var nfc = parseFloat(this.state.nfc)
        var ofc = parseFloat(this.state.ofc)

        return (
            <View style={{ flex: 0 }}>
                <Text style={style.titulo}>{this.props.route.params.cidade}</Text>
                <Text style={style.subtitulo}> Quadro GERAL </Text>

                <Quadro
                    renderizaMusicos
                    navigation={this.props.navigation}
                    data={{cidade: this.props.route.params.id_cidade}}
                    url="selectDadosCidade.php"
                />



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

                {this.state.loading && <Text>Carregando...</Text>}
                {!this.state.loading && (

                    <FlatList
                        data={this.state.musicos}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{ paddingBottom: 300 }}


                    />
                )}


            </View>
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
}
