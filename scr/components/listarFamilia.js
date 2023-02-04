import { Picker } from "@react-native-picker/picker"
import React, { Component } from "react"
import { View, Text } from "react-native"


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
        let url = "https://apiccb.cdamorais.com/selectdadoscadastro.php"
        let resposta = await fetch(url)
        let data = await resposta.json()

        this.setState({ familias: data[2], loading: false })

    }
    familia = () => {
        return this.state.familias.map((familia) => {
            return <Picker.Item label={familia.nome_estado} key={familia.id_estado} value={familia.id_estado} />
        })
    }
    render() {
        return (
            <View>
                {this.state.loading && <Text>Carregando...</Text>}
                {!this.state.loading && (
                    <Picker
                        selectedValue={this.state.familia}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => { 
                            this.setState({ estado: itemValue }) 
                            this.props.estado(itemValue)
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

