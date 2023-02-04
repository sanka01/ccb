import React, { Component } from "react";
import { Text, View } from "react-native";
import RegistroPessoa from "../components/registroPessoa";

const style = require("../components/styles").styler
export class CadastroMusico extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={style.container}>
                <Text style={style.titulo}>Cadastrar Musico</Text>
                <RegistroPessoa

                />
            </View>
        )
    }


}