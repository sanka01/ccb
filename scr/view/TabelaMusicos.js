import React, { Component } from "react";
import { Text, View } from "react-native";
import Quadro from "../components/quadro";

const style = require("../components/styles").styler

export class TabelaMusicos extends Component {
    render() {
        return (
            <View style={{ flex: 0 }}>
                <Text style={style.titulo}>{this.props.route.params.cidade}</Text>
                <Text style={style.subtitulo}> Quadro GERAL</Text>
                <Quadro
                    url="selectDadosRegiao.php"
                    data={{ cidade: this.props.route.params.id_cidade }}
                    renderizaMusicos
                    navigation={this.props.navigation}
                />

            </View>
        )

    }

}

