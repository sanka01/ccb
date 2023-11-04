import React, { Component } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Porcentagens } from "../components/porcentagens";
import StatusMusico from "../components/getStatus";
import Quadro from "../components/quadro";

const style = require("../components/styles").styler

export class TabelaMusicosCidade extends Component {


    render() {

        return (
            <View style={{ flex: 0 }}>
                <Text style={style.titulo}>{this.props.route.params.cidade}</Text>
                <Text style={style.subtitulo}> Quadro GERAL </Text>

                <Quadro
                    renderizaMusicos
                    navigation={this.props.navigation}
                    data={{cidade: this.props.route.params.id_cidade}}
                    url="selectListaGeralCidade.php"
                />





            </View>
        )

    }
}
