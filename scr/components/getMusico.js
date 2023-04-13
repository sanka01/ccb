import React, { Component } from "react";
import { Text } from "react-native";
import { View } from "react-native";
const style = require("./styles").styler

export class GetMusico extends Component {

    render() {

        return (

            <View style={style.itemMusico}>
                <Text style={style.tituloMusico}>{nome}  |  {comum}</Text>
                <Text style={style.tituloMusico}>Instrumento:  {instrumento}</Text>
            </View>
        )
    }

}