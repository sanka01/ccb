import { Picker } from "@react-native-picker/picker"
import React, { Component } from "react"
import { View, Text } from "react-native"
import {EXPO_PUBLIC_URL as URL} from '@env'


class ListarEstados extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            estado: "",
            estados: []
        }
    }
    componentDidMount() {
        this.getDados()
    }

    getDados = async () => {
        let url = URL + "selectdadoscadastro.php"
        let resposta = await fetch(url)
        let data = await resposta.json()

        this.setState({ estados: data[0], loading: false })

    }
    estado = () => {
        return this.state.estados.map((estado) => {
            return <Picker.Item label={estado.nome_estado} key={estado.id_estado} value={estado.id_estado} />
        })
    }
    render() {
        return (
            <View>
                {this.state.loading && <Text>Carregando...</Text>}
                {!this.state.loading && (
                    <Picker
                        selectedValue={this.state.estado}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => { 
                            this.setState({ estado: itemValue }) 
                            this.props.estado(itemValue)
                        }}
                    >
                        {this.estado()}

                    </Picker>
                )}
            </View>
        )
    }
}
export default ListarEstados

