import React, { Component } from "react";

import { Text, TouchableOpacity, View } from "react-native";

const styler = require("../components/styles").styler

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <View style={styler.container_row}>
                    <TouchableOpacity style={styler.botao_quadrado} onPress={
                        () => this.props.navigation.navigate('Cidades')
                    }>
                        <Text style={styler.texto}>CIDADES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styler.botao_quadrado} onPress={
                        () => this.props.navigation.navigate('TabelaMusicos', {
                            cidade: "Indiara",
                            id_cidade: 2
                        })
                    }>
                        <Text style={styler.texto}>LISTA GERAL (INDIARA-GO)</Text>
                    </TouchableOpacity>
                </View>

                <View style={styler.container_row}>
                    <TouchableOpacity style={styler.botao_quadrado} onPress={
                        () => this.props.navigation.navigate('CadastroMusico')            
                    }>
                        <Text style={styler.texto}>CADASTRAR MÚSICO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styler.botao_quadrado} onPress={
                        () => this.props.navigation.navigate('QuadroGeral')
                    } >
                        <Text style={styler.texto}>QUADRO GERAL DA ORQUESTRA</Text>
                    </TouchableOpacity>
                </View>

                <View style={styler.container_row}>
                    <TouchableOpacity style={styler.botao_quadrado}  onPress={
                        () => this.props.navigation.navigate('QuadroGeral')
                    } >
                        <Text style={styler.texto}>ENSAIOS LOCAIS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styler.botao_quadrado}  onPress={
                        () => this.props.navigation.navigate('EditarMusico')
                    } >
                        <Text style={styler.texto}>ENSAIO REGIONAL</Text>
                    </TouchableOpacity>
                </View>

                <View style={styler.container_row}>
                    <TouchableOpacity style={styler.botao_quadrado} onPress={
                        () => this.props.navigation.navigate('Agenda')
                    } >
                        <Text style={styler.texto}>AGENDA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styler.botao_quadrado} onPress={
                        () => this.props.navigation.navigate('Sobre')
                    }  >
                        <Text style={styler.texto}>SOBRE O APP</Text>
                    </TouchableOpacity>
                </View>

            </>
        )
    }
}
export default Home;