import { Button } from "@rneui/themed/dist";
import React, { Component, useCallback } from "react";
import { Alert, Linking, Text, View } from "react-native";
import { styler } from "../components/styles";

const url="https://cdamorais.com/"

const OpenURLButton = ({url, children}) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button style={styler.botao} title={children} onPress={handlePress} />;
  };
  
export class Sobre extends Component{


    render(){
        return(
            <View  style={styler.container}>
                <Text style={styler.titulo}>SOBRE</Text>
                <Text style={styler.subtitulo}>Desenvolvido por:</Text>
                <OpenURLButton  style={styler.botao}  url={url}> SVG EXPERIENCE</OpenURLButton>
                <Text style={styler.texto}>Desenvolvedor: Samuel S Morais</Text>
                <Text style={styler.texto}>Versão 0.5.2</Text>
                <Text style={styler.texto}>verificação de bug na tela de cadastro</Text>
            </View>
        )
    }
}