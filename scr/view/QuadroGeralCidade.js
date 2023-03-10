import React, { Component } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { ListarBotoesComums } from "../components/listarBotoesComuns";
import { Porcentagens } from "../components/porcentagens";
const style = require("../components/styles").styler
export class QuadroGeralCidade extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cordas: 0,
            metais: 0,
            madeiras: 0,
            organistas: 0,
            total: 0,
            comuns: [],
            loading: true
        }
    }
    componentDidMount() {
        this.getDados()
    }
    getDados = async () => {
        let url = "https://apiccb.cdamorais.com/selectDadosCidade.php"
        let data = {
            cidade: this.props.route.params.id_cidade
        }
        let resposta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        let dados = await resposta.json()
        this.setState({
            cordas: dados[0]["cordas"], madeiras: dados[0]["madeira"], metais: dados[0]["metais"], total: dados[0]["musicos"],
            organistas: dados[0]["organistas"],
            comuns: dados[1], loading: false
        })

    }
    getComuns = ({ item }) => {
        return (
            <ListarBotoesComums
                nome={item.nome}
                id={item.id}
                navigation={this.props.navigation} />
        )

    }
    render() {
        var total = parseFloat(this.state.total)
        return (
            <View style={style.container}>
                <Text style={style.titulo}>{this.props.route.params.cidade}</Text>
                <Text style={style.subtitulo}> Quadro GERAL</Text>
                <Porcentagens
                    metais={this.state.metais}
                    madeiras={this.state.madeiras}
                    cordas={this.state.cordas}
                    organistas={this.state.organistas} />
                <View style={style.row}>
                    <Text style={style.quadro_info}>
                        Total de m??sicos = {total}
                    </Text>


                </View>

                <View style={style.container}>
                    <TouchableOpacity style={[style.botao, { margin: 10 }]} onPress={
                        () => this.props.navigation.navigate('TabelaMusicosCidade', {
                            cidade: this.props.route.params.cidade,
                            id_cidade: this.props.route.params.id_cidade
                        })
                    }>
                        <Text style={style.texto}>Lista Geral</Text>
                    </TouchableOpacity>
                    {this.state.loading && <Text>Carregando...</Text>}
                    {!this.state.loading && (
                        <FlatList
                            data={this.state.comuns}
                            renderItem={this.getComuns}
                            keyExtractor={(item, index) => item.toString()}

                        />
                    )}

                </View>
            </View>
        )
    }
}