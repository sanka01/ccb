import { Picker } from "@react-native-picker/picker"
import React, { Component } from "react"
import { View, Text } from "react-native"
import {EXPO_PUBLIC_URL as URL} from '@env'


class ListarCidades extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            cidades: [],
            cidade: ""
        }
    }

    cidade = () => {
        return this.props.cidades.map((cidade) => {
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

