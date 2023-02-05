import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
const style = require("./styles").styler
export class ListarBotoesComums extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <TouchableOpacity style={[style.botao, {margin: 10}]} onPress={
                () => this.props.navigation.navigate('QuadroComum', {
                    cidade: this.props.cidade, 
                    id_cidade: this.props.id_cidade,
                    nome: this.props.nome,
                    id: this.props.id})
            }>
                <Text style={style.texto}>{this.props.nome}</Text>
            </TouchableOpacity>
        )
    }
}