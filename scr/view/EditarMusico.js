import React, {Component} from "react";
import { Text, View } from "react-native";
export class EditarMusico extends Component{

    constructor(props){
        super(props)
        this.state = {
            id: 0,
            nome: "",
            status: 0,
            instrumento: 0,
            setor: 0
            
        }
    }
    getMusico = async() =>{
        let url="https://apiccb.cdamorais.com/selectMusico.php"
        let data = {
            id: this.props.route.params.id
        }
        let resposta = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data)
        })
        let dados = await resposta.json()
        this.setState({
            id: dados[0]["id"],
            nome: dados[0]["Nome"],
            status: dados[0]["Status"],
            id_instrumento: dados[0]["is_instrumento"],
            id_setor: dados[0]["id_setor"],
            telefone: dados[0]["telefone"],

        })
        debugger
    }

    componentDidMount(){
        this.getMusico()
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