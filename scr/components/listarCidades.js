import { Picker } from "@react-native-picker/picker"
import React, { Component } from "react"
import { View, Text } from "react-native"


class ListarCidades extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            cidades: [],
            cidade: ""
        }
    }
    componentDidMount() {
        this.getDados()
    }



    getDados = async () => {
        let url = "https://apiccb.cdamorais.com/selectdadoscadastro.php"
        let resposta = await fetch(url)
        let data = await resposta.json()

        this.setState({ cidades: data[1], loading: false })
        this.props.cidade = data[1][0]

    }
    cidade = () => {
        return this.state.cidades.map((cidade) => {
            if (cidade.estado_cidade == this.props.estado) {
                return <Picker.Item label={cidade.nome_cidade} key={cidade.cidade} value={cidade.cidade} />
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
                        selectedValue={this.state.cidade}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => {
                            this.setState({cidade: itemValue})
                            this.props.cidade(itemValue)
                        } }
                    >
                        {this.cidade()}

                    </Picker>
                )}
            </View>
        )
    }
}
export default ListarCidades

