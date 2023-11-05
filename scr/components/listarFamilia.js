import { Picker } from "@react-native-picker/picker"
import React, { Component } from "react"
import { View, Text } from "react-native"
import {EXPO_PUBLIC_URL as URL} from '@env'


class ListarFamilia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            familia: "",
            familias: []
        }
    }
    componentDidMount() {
        this.getDados()
    }

    getDados = async () => {
        let url = URL +"selectdadoscadastro.php"
        let resposta = await fetch(url)
        let data = await resposta.json()

        this.setState({ familias: data[2], loading: false })

    }
    familia = () => {
        return this.state.familias.map((familia) => {
            return <Picker.Item label={familia.nome_familia} key={familia.id} value={familia.id} />
        })
    }
    render() {
        return (
            <View>
                {this.state.loading && <Text>Carregando...</Text>}
                {!this.state.loading && (
                    <Picker
                        selectedValue={this.state.familia}
                        onValueChange={(itemValue, itemIndex) => { 
                            this.setState({ familia: itemValue }) 
                            this.props.familia(itemValue)
                        }}
                    >
                        {this.familia()}

                    </Picker>
                )}
            </View>
        )
    }
}
export default ListarFamilia

