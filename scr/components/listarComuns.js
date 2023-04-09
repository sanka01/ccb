import { Picker } from "@react-native-picker/picker"
import React, { Component } from "react"
import { View, Text } from "react-native"


export class ListarComuns extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            setores: [],
            setor: ""
        }
    }
    componentDidMount() {
        this.getDados()
    }



    getDados = async () => {
        let url = "https://apiccb.cdamorais.com/selectdadoscadastro.php"
        let resposta = await fetch(url)
        let data = await resposta.json()

        this.setState({ setores: data[4], loading: false })
        this.props.cidade = data[4][0]

    }
    getSetor = () => {
        return this.state.setores.map((setor) => {
            if (setor.cidade == this.props.cidade) {
                return <Picker.Item label={setor.nome} key={setor.id} value={setor.id} />
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
                        selectedValue={this.state.setor}
                        onValueChange={(itemValue, itemIndex) => {
                            this.setState({setor: itemValue})
                            this.props.setor(itemValue)
                        } }
                    >
                        {this.getSetor()}

                    </Picker>
                )}
            </View>
        )
    }
}

