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
                    <TouchableOpacity style={styler.botao_quadrado}  >
                        <Text style={styler.texto}>REGIÃO</Text>
                    </TouchableOpacity>
                </View>

                <View style={styler.container_row}>
                    <TouchableOpacity style={styler.botao_quadrado}>
                        <Text style={styler.texto}>CADASTRAR MÚSICO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styler.botao_quadrado}  >
                        <Text style={styler.texto}>RELATÓRIO GERAL</Text>
                    </TouchableOpacity>
                </View>

                <View style={styler.container_row}>
                    <TouchableOpacity style={styler.botao_quadrado} >
                        <Text style={styler.texto}>ALTERAR DADOS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styler.botao_quadrado} >
                        <Text style={styler.texto}>RELATÓRIO POR CIDADE</Text>
                    </TouchableOpacity>
                </View>

                <View style={styler.container_row}>
                    <TouchableOpacity style={styler.botao_quadrado}  >
                        <Text style={styler.texto}>EXCLUIR CADASTRO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styler.botao_quadrado}  >
                        <Text style={styler.texto}>AGENDA</Text>
                    </TouchableOpacity>
                </View>

            </>
        )
    }
}
export default Home;