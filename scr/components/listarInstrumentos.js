import { Picker } from "@react-native-picker/picker"
import React, { Component } from "react"
import { View, Text } from "react-native"


export class ListarInstrumentos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            instrumentos: [],
            instrumento: ""
        }
    }
    componentDidMount() {
        this.getDados()
    }



    getDados = async () => {
        let url = "https://apiccb.cdamorais.com/selectdadoscadastro.php"
        let resposta = await fetch(url)
        let data = await resposta.json()

        this.setState({ instrumentos: data[3], loading: false })
        this.props.instrumento = data[3][0]

    }
    instrumento = () => {
        return this.state.instrumentos.map((instrumento) => {
            if (instrumento.id_familia == this.props.id_familia) {
                return <Picker.Item label={instrumento.nome} key={instrumento.id} value={instrumento.id} />
            } else {
                return null
            }
        })

    }
    render() {
        return (
            <View>
                {this.state.loading && <Text>Carregando...</Text>}
                {!this.state.loading && (
                    <Picker
                        selectedValue={this.state.instrumento}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => {
                            this.setState({instrumento: itemValue})
                            this.props.instrumento(itemValue)
                        } }
                    >
                        {this.instrumento()}

                    </Picker>
                )}
            </View>
        )
    }
}

