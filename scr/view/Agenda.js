import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { styler } from "../components/styles";
import { Divider } from '@rneui/themed';


export class Agenda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            agenda: [],
            loading: true,
        }
    }
    getAgenda = async () => {
        let url = "https://apiccb.cdamorais.com/agenda.php"
        let resposta = await fetch(url)
        let data = await resposta.json()
        this.setState({ agenda: data[0]['Rows'], loading: false })


    }
    componentDidMount() {
        this.getAgenda()
    }

    getEnsaio = ({ item }) => {
        return (
            <>
                <Text style={styler.subtitulo}>{item.nome}</Text>
                <Text style={styler.texto}>{item.texto}</Text>
                <Divider/>
            </>

        )
    }
    render() {
        return (
            <View>
                <Text style={styler.titulo}>Ensaios Locais</Text>

              

                {this.state.loading && <Text>Carregando...</Text>}
                {!this.state.loading && (

                    <FlatList
                        data={this.state.agenda}
                        renderItem={this.getEnsaio}
                        keyExtractor={(i, j) => i.toString()}

                    />
                )}


            </View>
        )
    }
}