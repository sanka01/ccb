import { Picker } from "@react-native-picker/picker"
import React, { Component } from "react"
import { View, Text } from "react-native"
import {EXPO_PUBLIC_URL as URL} from '@env'


export class ListarComuns extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            setores: [],
            setor: ""
        }
    }

    getSetor = () => {
        return this.props.setores.map((setor) => {
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

