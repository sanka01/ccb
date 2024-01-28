import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";


const style = require("../components/styles").styler
export class Ensaios extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={style.container}>
                
                <TouchableOpacity style={style.botao} onPress={
                    () => this.props.navigation.navigate('Home')
                }>
                    <Text style={style.texto}>Ensaios Locais</Text>
                </TouchableOpacity>                    
                <TouchableOpacity style={style.botao} onPress={
                    () => this.props.navigation.navigate('Home')
                }>
                    <Text style={style.texto}>Reuniões</Text>
                </TouchableOpacity>                    
                <TouchableOpacity style={style.botao} onPress={
                    () => this.props.navigation.navigate('Home')
                }>
                    <Text style={style.texto}>Ensaio Regional</Text>
                </TouchableOpacity>                    
                <TouchableOpacity style={style.botao} onPress={
                    () => this.props.navigation.navigate('Home')
                }>
                    <Text style={style.texto}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}