import React, { Component } from "react";
import { Button, View } from "react-native";
import ListarPessoas from "../components/listarPessoas";
import RegistroPessoa from "../components/registroPessoa";

class Home extends Component {

    render() {
        return (
            <View style={{paddingRight: 50, paddingLeft: 50, paddingTop: 20}}>
                <RegistroPessoa />
                <ListarPessoas />
                <Button
                title="link tela teste"
                onPress={()=>
                this.props.navigation.navigate("Teste")
                }/>
            </View>
        )
    }
}
export default Home;