import React, { Component } from "react";

import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const styler = require("../components/styles").styler

const routes = [
    { title: 'CIDADES', path: 'Cidades' },
    { title: 'LISTA GERAL (REGIÃO INDIARA-GO)', path: 'TabelaMusicos', params: { cidade: 'Indiara', id_cidade: 2 }},
    { title: 'CADASTRAR MÚSICO', path: 'CadastroMusico' },
    { title: 'RELATÓRIO GERAL DA ORQUESTRA', path: 'QuadroGeral' },
    { title: 'FREQUÊNCIA - ENSAIOS LOCAIS', path: 'QuadroGeral' },
    { title: 'FREQUÊNCIA - ENSAIOS REGIONAL', path: 'QuadroGeral' },
    { title: 'AGENDA', path: 'Agenda' },
    { title: 'SOBRE O APP', path: 'Sobre' },
]

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <View style={styler.container_row}>
            {routes.map(({title, path, params})=>
            <TouchableOpacity style={styler.botao_quadrado} onPress={() => this.props.navigation.navigate(path, params)}>
                <Text style={StyleSheet.compose(styler.texto, styler.texto_menu)}>{title}</Text>
            </TouchableOpacity>
        , this)}
        </View>
    }
}
export default Home;