import React, { Component } from "react";
import { FlatList, Text, StatusBar, View } from "react-native";
import { ListarBotoesComums } from "../components/listarBotoesComuns";
import { Porcentagens } from "../components/porcentagens";

const style = require("../components/styles").styler

export class TabelaMusicos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cordas: 5,
            metais: 3,
            madeiras: 5,
            organistas: 9,
        }
    }



    render() {
        var total = (this.state.cordas + this.state.madeiras + this.state.metais)
        var total_real = total + this.state.organistas

        var musicos = [
            {
                id: '1',
                nome: 'nome 1',
                instrumento: 'instrumento 1'
            },
            {
                id: '2',
                nome: 'nome 2',
                instrumento: 'instrumento 2'

            },
            {
                id: '3',
                nome: 'nome 3',
                instrumento: 'instrumento 3'
            },
            {
                id: '4',
                nome: 'nome 4',
                instrumento: 'instrumento 1'
            },
            {
                id: '5',
                nome: 'nome 5',
                instrumento: 'instrumento 2'

            },
            {
                id: '6',
                nome: 'nome 6',
                instrumento: 'instrumento 3'
            }
        ]


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


                <FlatList
                    data={musicos}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}

                />


            </View>
        )

    }
    renderItem({ item }) {
        return (
            <Item
                nome={item.nome}
                instrumento={item.instrumento}
            />
        )
    }
}

const Item = ({ nome, instrumento }) => (
    <View style={style.itemMusico}>
        <Text style={style.tituloMusico}>{nome}</Text>
        <Text style={style.texto}>{instrumento}</Text>
    </View>
)