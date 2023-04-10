import React, { Component } from "react";
import { Text, View, TextInput, Button, Modal, TouchableOpacity } from "react-native";
import StatusMusico from "../components/getStatus";
import { Picker } from "@react-native-picker/picker";
import ListarCidades from "../components/listarCidades";
import { ListarComuns } from "../components/listarComuns";
import ListarFamilia from "../components/listarFamilia";
import { ListarInstrumentos } from "../components/listarInstrumentos";
import { Divider } from "@rneui/themed/dist/Divider";
import { StyleSheet } from "react-native";
const Style = require("../components/styles.js").styler

export class EditarMusico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            nome: "",
            status: 0,
            instrumento: 0,
            setor: 0,
            familia: 0,
            telefone: "",
            email: "",
            estados: [],
            cidades: [],
            familias: [],
            instrumentos: [],
            setores: [],
            exibirConfirmacao: false
        };
    }

    getMusico = async () => {
        let url = "https://apiccb.cdamorais.com/selectMusico.php";
        console.log(this.props.route)
        let data = {
            id: this.props.route.params.id
        };
        let resposta = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
        });
        let dados = await resposta.json();
        this.setState({
            id: dados.id,
            nome: dados.Nome,
            status: dados.Status,
            instrumento: dados.id_instrumento,
            setor: dados.id_setor,
            telefone: dados.telefone,
            email: dados.email
        });
    };

    getDadosForm = async () => {
        let url = "https://apiccb.cdamorais.com/selectdadoscadastro.php"
        let resposta = await fetch(url)
        let dados = await resposta.json()
        this.setState({
            estados: dados[0],
            cidades: dados[1],
            familias: dados[2],
            instrumentos: dados[3],
            setores: dados[4],
        }, () => {
            console.log("Dados de formulário atualizados")
        });
    }

    componentDidMount() {
        this.getMusico();
        this.getDadosForm()
    }

    deletarMusico = async () => {
        let url = "https://apiccb.cdamorais.com/excluir.php"
        let data = {
            id: this.state.id
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((response) => {
                alert(response[0].Message);
                this.props.navigation.navigate("Home")
            })
            .catch((error) => {
                alert("Error" + error);
            })
    }
    atualizarMusico = async () => {
        let url = "https://apiccb.cdamorais.com/editar.php";
        let data = {
            id: this.state.id,
            nome: this.state.nome,
            status: this.state.status,
            instrumento: this.state.instrumento,
            setor: this.state.setor,
            telefone: this.state.telefone,
            email: this.state.email
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((response) => {
                alert(response[0].Message);
                this.props.navigation.goBack()
            })
            .catch((error) => {
                alert("Error" + error);
            })

    }
    setCidade = (cidadeChild) => {

        for (let i = 0; i < this.state.setores.length; i++) {
            if (this.state.setores[i].cidade === cidadeChild) {
                this.setState({ setor: this.state.setores[i].id });
                break;
            }
        }

        this.setState({ cidade: cidadeChild })

    }
    setEstado = (estadoChild) => {
        this.setState({ estado: estadoChild })
    }

    setFamilia = (familiaChild) => {
        for (let i = 0; i < this.state.instrumentos.length; i++) {
            if (this.state.instrumentos[i].familia === familiaChild) {
                this.setState({ instrumento: this.state.instrumentos[i].id });
                break;
            }
        }

        this.setState({ familia: familiaChild })
    }

    setInstrumento = (instrumentoChild) => {
        this.setState({ instrumento: instrumentoChild })
    }
    setSetor = (setorChild) => {
        this.setState({ setor: setorChild })
    }
    confirmarExclusao = () => {
        this.setState({ exibirConfirmacao: true })
    };

    cancelarExclusao = () => {
        this.setState({ exibirConfirmacao: false })
    };

    render() {

        return (
            <View style={{ flex: 1, paddingLeft: 8, paddingRight: 8 }}>
                <TextInput
                    placeholder='Nome Completo'
                    placeholderTextColor={"grey"}
                    style={Style.textoInput}
                    value={this.state.nome}
                    onChangeText={nome => this.setState({ nome: nome })}
                />
                <TextInput
                    placeholder='E-mail'
                    placeholderTextColor={"grey"}
                    style={Style.textoInput}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email: email })}
                />
                <TextInput
                    placeholder='Telefone'
                    placeholderTextColor={"grey"}
                    style={Style.textoInput}
                    value={this.state.telefone}
                    onChangeText={telefone => this.setState({ telefone: telefone })}
                />
                <Text>Status</Text>
                <Picker
                    selectedValue={this.state.status}
                    onValueChange={(itemValue, itemIndex) => {
                        this.setState({ status: itemValue })
                    }}
                >
                    <Picker.Item label="Aluno" value='0' />
                    <Picker.Item label="Reunião de Jovens e Menores" value='1' />
                    <Picker.Item label="Oficializado" value='2' />
                    <Picker.Item label="Não Oficializado" value='3' />
                </Picker>
                <Text>Comum</Text>
                <Picker selectedValue={this.state.setores} onValueChange={this.setSetor}>
                    {this.state.setores.map((setor) => (
                        <Picker.Item key={setor.id} label={setor.nome} value={setor.id} />
                    ))}
                </Picker>

                <Text>Instrumento</Text>
                <Picker selectedValue={this.state.instrumento} onValueChange={this.setInstrumento}>
                    {this.state.instrumentos.map((instrumento) => (
                        <Picker.Item key={instrumento.id} label={instrumento.nome} value={instrumento.id} />
                    ))}
                </Picker>

                <Button
                    style={Style.button}
                    title='Atualizar'
                    onPress={this.atualizarMusico}
                />


                <Divider style={{ margin: 20 }} />
                <Button
                    color="#F53F3C"
                    title="Deletar"
                    onPress={this.confirmarExclusao} />



                <Modal visible={this.state.exibirConfirmacao}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Tem certeza que deseja excluir esse musico?</Text>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={[styles.button, styles.buttonSim]} onPress={this.deletarMusico}>
                                <Text style={styles.buttonText}>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.buttonNao]} onPress={this.cancelarExclusao}>
                                <Text style={styles.buttonText}>Não</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    modalContainer: {
        borderRadius: 16,
        padding: 16,
        height: "50%",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        borderRadius: 8,
        padding: 8,
        minWidth: 80,
        alignItems: 'center',
    },
    buttonSim: {
        backgroundColor: '#FF0000',
    },
    buttonNao: {
        backgroundColor: '#CCCCCC',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

})