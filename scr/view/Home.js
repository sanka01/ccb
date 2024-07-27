import React, { Component } from "react";

import { Text, TouchableOpacity, ScrollView, StyleSheet, View } from "react-native";

const styler = require("../components/styles").styler
//ao alterar rotas é nescessario criar a Screen no App.js
const routes = [
    { title: 'CIDADES', path: 'Cidades' },
    { title: 'LISTA GERAL (REGIÃO INDIARA)', path: 'TabelaMusicos', params: { cidade: 'Indiara', id_cidade: 2 } },
    { title: 'CADASTRAR MÚSICO', path: 'CadastroMusico' },
    { title: 'RELATÓRIO GERAL', path: 'RelatorioPerspectiva' },
    { title: 'ENSAIOS', path: 'Ensaios' },
    { title: 'BUSCADOR', path: 'QuadroGeral' },
    { title: 'AGENDA', path: 'Agenda' },
    { title: 'SOBRE O APP', path: 'Sobre' },
]

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <ScrollView>
            <View style={styler.container_row}>
                {routes.map(({ title, path, params }) =>
                    <TouchableOpacity key={title} style={styler.botao_quadrado} onPress={() => this.props.navigation.navigate(path, params)}>
                        <Text style={StyleSheet.compose(styler.texto, styler.texto_menu)}>{title}</Text>
                    </TouchableOpacity>
                    , this)}
            </View>
        </ScrollView>
    }
}
export default Home;