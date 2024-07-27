import React, { Component } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Porcentagens } from "../components/porcentagens";
import StatusMusico from "../components/getStatus";
import { ListarBotoesComums } from "./listarBotoesComuns";
import { EXPO_PUBLIC_URL as URL } from '@env'
const style = require("../components/styles").styler

export default class QuadroAluno extends Component {
    static handleDados([perspectiva_real, alunos, perspectiva_geral]) {
        return {
            ...alunos,
            perspectiva: {
                real: perspectiva_real,
                geral: perspectiva_geral,
            }
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            perspectiva: {
                geral: {
                    cordas: 0,
                    metais: 0,
                    madeira: 0,
                    organistas: 0,
                },
                real: {
                    cordas: 0,
                    metais: 0,
                    madeira: 0,
                    organistas: 0,
                },
            },
            total: 0,
            OFC: 0,
            NFC: 0,
            renderizaPorcentagens: props.renderizaPorcentagens ?? true,
            renderizaAlunos: props.renderizaAlunos ?? true,
            aluno_sem_instrumento: 0,
            aluno_com_instrumento: 0,
            aluno_rjm: 0,
            aluno_ensaio: 0,
            loading: true,
            musicos: [],
            url: props.url
        }
        props.navigation.addListener('focus', () => this.getDados())

    }
    componentDidMount() {
        this.getDados()
    }
    async getDados() {
        let url = URL + this.props.url
        let data = this.props.data
        let resposta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        let dados = await resposta.json()
        this.setState({
            ...QuadroAluno.handleDados(dados),
            loading: false
        })
    }

    render() {
        return (
            <>
                {this.props.renderizaPorcentagens ?? true
                    ? <Porcentagens
                        metais={this.state.perspectiva[this.props.perspectiva ?? 'real'].metais}
                        madeiras={this.state.perspectiva[this.props.perspectiva ?? 'real'].madeira}
                        cordas={this.state.perspectiva[this.props.perspectiva ?? 'real'].cordas}
                        organistas={this.state.perspectiva[this.props.perspectiva ?? 'real'].organistas} />
                    : <></>}
                {this.props.renderizaAlunos ?? true
                    ?
                    <View style={style.row}>
                        <View style={style.coluna}>
                            <Text style={style.quadro_info}>
                                Aluno Sem{"\n"}
                                Instrumento = {this.state.aluno_sem_instrumento}
                            </Text>
                        </View>
                        <View style={style.coluna}>

                            <Text style={style.quadro_info}>
                                Aluno Com{"\n"}
                                Instrumento = {this.state.aluno_com_instrumento}
                            </Text>
                        </View>
                        <View style={style.coluna}>

                            <Text style={style.quadro_info}>
                                Aluno{"\n"}
                                Ensaio = {this.state.aluno_ensaio}
                            </Text>
                        </View>

                        <View style={style.coluna}>

                            <Text style={style.quadro_info}>
                                Aluno{"\n"}
                                RJM = {this.state.aluno_rjm}
                            </Text>
                        </View>

                    </View>
                    : <></>}


            </>

        )
    }

}
