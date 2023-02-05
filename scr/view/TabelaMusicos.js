import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { Porcentagens } from "../components/porcentagens";

const style = require("../components/styles").styler

export class TabelaMusicos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cordas: 0,
            metais: 0,
            madeiras: 0,
            organistas: 0,
            total: 0,
            musicos: []
        }
    }

    componentDidMount(){
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
            cordas: dados[0]["cordas"], madeira: dados[0]["madeira"], metais: dados[0]["metais"], total: dados[0]["musicos"],
            musicos: dados[2], loading: false
        })

    }

    render() {
        var total = parseFloat(this.state.total)
        var total_real = total + parseFloat(this.state.organistas)

        


        return (
            <View style={{ flex: 0 }}>
                <Text style={style.titulo}>{this.props.route.params.cidade}</Text>
                <Text style={style.subtitulo}> Quadro GERAL</Text>
                <Porcentagens
                    metais={this.state.metais}
                    madeiras={this.state.madeiras}
                    cordas={this.state.cordas}
                    organistas={this.state.organistas} />
                <View style={style.row}>
                    <Text style={style.quadro_info}>
                        Total de músicos = {total_real}
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
    renderItem({ item }) {
        return (
            <Item
                nome={item.nome_pessoa}
                instrumento={item.nome_instrumento}
                comum={item.setor}
            />
        )
    }
}

const Item = ({ nome, instrumento, comum }) => (
    <View style={style.itemMusico}>
        <Text style={style.tituloMusico}>{nome}</Text>
        <Text style={style.texto}>Instrumento: {instrumento}</Text>
        <Text style={style.texto}>Comum: {comum}</Text>
    </View>
)