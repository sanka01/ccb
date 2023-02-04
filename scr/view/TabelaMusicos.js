import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ListarComums } from "../components/listarComuns";
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
        return (
            <View style={style.container}>
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

                <View style={style.container}>


                </View>
            </View>
        )

    }
}