import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import Quadro from "../components/quadro";
import QuadroAluno from "../components/quadroAluno";


const styler = require("../components/styles").styler
export class RelatorioPerspectiva extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView>
                <View style={styler.container}>
                    <Text style={styler.titulo}>Quadro Geral Atual</Text>
                    <View style={styler.quadro_info}>
                        <QuadroAluno
                            url="selectPerpectiva.php"
                            incluiIniciantes
                            navigation={this.props.navigation}
                        />
                    </View>
                </View>

                <View style={styler.container}>
                    <Text style={styler.titulo}>Quadro de alunos</Text>
                    <View style={styler.quadro_info}>
                        <QuadroAluno
                            renderizaPorcentagens={false}
                            url="selectPerpectiva.php"
                            navigation={this.props.navigation}
                        />
                    </View>
                </View>

                <View style={styler.container}>
                    <Text style={styler.titulo}>Quadro Geral - Perspectiva</Text>
                    <View style={styler.quadro_info}>
                        <QuadroAluno
                            renderizaPorcentagens={true}
                            renderizaAlunos={false}
                            perspectiva='geral'
                            url="selectPerpectiva.php"
                            navigation={this.props.navigation}
                        />
                    </View>
                </View>
            </ScrollView>

        )
    }
}