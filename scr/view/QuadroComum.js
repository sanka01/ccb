import React, { Component } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Porcentagens } from "../components/porcentagens";
const style = require("../components/styles").styler
export class QuadroComum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cordas: 0,
            metais: 0,
            madeiras: 0,
            organistas: 0,
            total: 0,
            comuns: [],
            loading: true
        }
    }
    componentDidMount() {
        this.getDados()
    }
    getDados = async () => {
        let url = "https://apiccb.cdamorais.com/selectDadosComum.php"
        let data = {
            setor: this.props.route.params.id
        }
        let resposta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        let dados = await resposta.json()
        this.setState({
            cordas: dados[0]["cordas"], madeiras: dados[0]["madeira"], metais: dados[0]["metais"], total: dados[0]["musicos"],
            organistas: dados[0]["organistas"],
            musicos: dados[1], loading: false
        })

    }
     renderItem({ item }) {
        return (
            <Item
                nome={item.nome_pessoa}
                instrumento={item.nome_instrumento}
            />
        )
    }
    render() {
        var total = parseFloat(this.state.total)
        return (
            <View style={style.container}>
                <Text style={style.titulo}>{this.props.route.params.nome}</Text>
                <Text style={style.subtitulo}> Quadro GERAL</Text>
                <Porcentagens
                    metais={this.state.metais}
                    madeiras={this.state.madeiras}
                    cordas={this.state.cordas}
                    organistas={this.state.organistas} />
                <View style={style.row}>
                    <Text style={style.quadro_info}>
                        Total de músicos = {total}
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
}

const Item = ({ nome, instrumento }) => (
    <View style={style.itemMusico}>
        <Text style={style.tituloMusico}>{nome} </Text>
        {/* <Text style={style.texto}>Instrumento: {instrumento}</Text>**/}
        <Text style={style.tituloMusico}>Instrumento:  {instrumento}</Text>
    </View>
)