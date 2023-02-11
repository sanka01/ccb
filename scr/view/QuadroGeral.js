import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const styler = require("../components/styles").styler
export class QuadroGeral extends Component {

    render() {
        return (
            <View>
                <Text style={styler.texto}>Em construção</Text>
                <View style={{
                    marginTop: "100%",
                    height: 50,
                    width: 500,
                    
                }}>
                    <TouchableOpacity style={styler.botao_quadrado} onPress={
                        () => this.props.navigation.navigate('Home')
                    }>
                        <Text style={styler.texto}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}