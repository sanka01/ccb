import React, { Component } from "react";

import { Text, TouchableOpacity, View } from "react-native";

const styler = require("../components/styles").styler
export class Cidades extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <View style={styler.container_column}>
                    <Text style={styler.titulo}>ESCOLHA UMA CIDADE</Text>
                    <TouchableOpacity style={styler.botao} onPress={
                        () => this.props.navigation.navigate('QuadroGeralCidade', {cidade: 'Cezarina', id_cidade: '3'})
                    }>
                        <Text style={styler.texto}>CEZARINA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styler.botao}  >
                        <Text style={styler.texto}>EDÉIA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styler.botao}>
                        <Text style={styler.texto}>INDIARA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styler.botao}  >
                        <Text style={styler.texto}>JANDAIA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styler.botao} >
                        <Text style={styler.texto}>PALMEIRAS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styler.botao}onPress={
                        () => this.props.navigation.navigate('Home')} >
                        <Text style={styler.texto}>INÍCIO</Text>
                    </TouchableOpacity>

                </View>


            </>
        )
    }
}