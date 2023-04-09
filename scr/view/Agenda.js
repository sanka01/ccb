import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { styler } from "../components/styles";
import { Divider } from '@rneui/themed';


export class Agenda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            agenda: [],
            mensagem: [],
            loading: true,
        }
    }
    getAgenda = async () => {
        let url = "https://apiccb.cdamorais.com/agenda.php"
        let resposta = await fetch(url)
        let data = await resposta.json()
        this.setState({ agenda: data['agenda'], mensagem: data['mensagem'], loading: false })

    }
    componentDidMount() {
        this.getAgenda()
    }

    getEnsaio = ({ item }) => {
        return (
            <>
                <Text style={styler.subtitulo}>{item.nome}</Text>
                <Text style={styler.texto}>{item.texto}</Text>
                <Divider />
            </>

        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styler.titulo}>Ensaios Locais</Text>

                {this.state.loading && <Text>Carregando...</Text>}
                {!this.state.loading && (
                    <>
                        <View style={styles.banner}>
                            <Text style={styles.title}>
                                {this.state.mensagem[0].titulo}
                            </Text>
                            <Text style={styles.message}>
                                {this.state.mensagem[0].mensagem}
                            </Text>
                        </View>
                        <FlatList
                            data={this.state.agenda}
                            renderItem={this.getEnsaio}
                            keyExtractor={(i, j) => i.toString()}
                            style={{ height: '100%' }}

                        />
                    </>

                )}


            </View>
        )
    }
}

const styles = StyleSheet.create({
    banner: {
      backgroundColor: '#9DD4BB',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      margin: 10,
    },
    title: {
      fontSize: 24,
      color: '#000',
      textAlign: 'center',
      marginBottom: 10,
    },
    message: {
      fontSize: 16,
      color: '#000',
      textAlign: 'center',
    },
  });