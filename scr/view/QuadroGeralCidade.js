import React, { Component } from "react";
import {  Text, View } from "react-native";
const style = require("../components/styles").styler
import { URL } from '@env'
import Quadro from "../components/quadro";

export class QuadroGeralCidade extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.titulo}>{this.props.route.params.cidade}</Text>
                <Text style={style.subtitulo}> Quadro GERAL </Text>
                <Quadro
                    url="selectDadosCidade.php"
                    data={{ cidade: this.props.route.params.id_cidade }}
                    renderizaComuns
                    route = {this.props.route}
                    navigation = {this.props.navigation}
                />
                
            </View>
        )
    }
}