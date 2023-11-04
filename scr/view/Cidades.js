import React, { Component } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import {URL} from '@env'
const styler = require("../components/styles").styler


export class Cidades extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cidades: []
        }
    }
    getCidades = async () => {
        let url = URL + "selectCidades.php"
        let resposta = await fetch(url)
        let data = await resposta.json()
        this.setState({ cidades: data[0]['Rows'], loading: false })

    }
    componentDidMount(){
        this.getCidades()
    }
    getCidade = ({ item }) => {
    
        return (
            <TouchableOpacity style={styler.botao} onPress={
                () => this.props.navigation.navigate('QuadroGeralCidade', { cidade: item.nome, id_cidade: item.id })
            }>
                <Text style={styler.texto}>{item.nome}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <>
                <View style={{ flex: 0 }}>
                    <Text style={styler.titulo}>ESCOLHA UMA CIDADE</Text>
                    <Text>&nbsp;</Text>
                    {this.state.loading && <Text>Carregando...</Text>}
                    {!this.state.loading && (

                        <FlatList
                            data={this.state.cidades}
                            renderItem={this.getCidade}
                            keyExtractor={(i, j) => i.toString()}

                        />
                    )}

                    <TouchableOpacity style={styler.botao} onPress={
                        () => this.props.navigation.navigate('Home')} >
                        <Text style={styler.texto}>INÍCIO</Text>
                    </TouchableOpacity>

                </View>


            </>
        )
    }
}

