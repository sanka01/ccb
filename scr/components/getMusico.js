import React, { Component } from "react";

export class GetMusico extends Component {

    render() {

        return (

            <View style={style.itemMusico}>
                <Text style={style.tituloMusico}>{nome}  |  {comum}</Text>
                <Text style={style.tituloMusico}>Instrumento:  {instrumento}</Text>
            </View>
        )
    }

}