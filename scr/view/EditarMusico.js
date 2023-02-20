import React, {Component} from "react";
import { Text, View } from "react-native";
export class EditarMusico extends Component{

    constructor(props){
        super(props)
        this.state = {
            nome: "",
            status: 0,
            instrumento: 0,
            setor: 0
            
        }
    }

    render(){

        return(
            <View>
                <Text>Nome: {this.state.nome}</Text>
                <Text>Status: {this.state.status}</Text>
                <Text>Instrumento: {this.state.instrumento}</Text>
                <Text>Setor: {this.state.setor}</Text>
                

            </View>
        )
    }

}