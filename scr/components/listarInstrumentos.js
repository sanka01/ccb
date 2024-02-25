import { Picker } from "@react-native-picker/picker"
import React, { Component } from "react"
import { View, Text } from "react-native"
import {EXPO_PUBLIC_URL as URL} from '@env'


export class ListarInstrumentos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            instrumentos: [],
            instrumento: ""
        }
    }


    instrumento = () => {
        return this.props.instrumentos.map((instrumento) => {
            
            if (instrumento.familia == this.props.familia) {
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

