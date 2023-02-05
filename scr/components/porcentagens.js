import React, { Component } from "react";
import { Text, View } from "react-native";
const style = require("./styles").styler
export class Porcentagens extends Component {
    constructor(props){
        super(props)
    }


    render() {
        var total = (parseFloat(this.props.cordas) +parseFloat( this.props.madeiras) +parseFloat( this.props.metais))
        var p_cordas = ((100 * this.props.cordas) / total).toFixed(0)
        var p_metais = ((100 * this.props.metais) / total).toFixed(0)
        var p_madeiras = ((100 * this.props.madeiras) / total).toFixed(0)
        
        return (
            <View style={style.row}>
                <Text style={style.quadro_info}>
                    {p_cordas}%
                    {'\n'}
                    cordas
                </Text>
                <Text style={style.quadro_info}>
                    {p_metais}%
                    {'\n'}
                    metais
                </Text>
                <Text style={style.quadro_info}>
                    {p_madeiras}%
                    {'\n'}
                    madeiras
                </Text>
                <Text style={style.quadro_info}>
                        {this.props.organistas}
                        {'\n'}
                        Organistas
                    </Text>
            </View>
        )
    }
}