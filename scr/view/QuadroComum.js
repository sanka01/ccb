import React, { Component } from "react";
import { Text, View } from "react-native";
import Quadro from "../components/quadro";
const style = require("../components/styles").styler
export class QuadroComum extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.titulo}>{this.props.route.params.nome}</Text>
                <Text style={style.subtitulo}> Quadro GERAL</Text>
                <Quadro 
                    url="selectDadosComum.php" 
                    data= {{setor: this.props.route.params.id}}
                    renderizaMusicos/>
            </View>
        )
    }
}
