import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
const style = require("./styles").styler
export class ListarComums extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <TouchableOpacity style={[style.botao, {margin: 10}]} onPress={
                () => this.props.navigation.navigate('QuadroGeralCidade', {cidade: 'Cezarina', id_cidade: '3'})
            }>
                <Text style={style.texto}>Comum {this.props.nome}</Text>
            </TouchableOpacity>
        )
    }
}