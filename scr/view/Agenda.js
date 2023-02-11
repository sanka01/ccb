import React, {Component} from "react";
import { Text, View } from "react-native";
import { styler } from "../components/styles";
import { Divider } from '@rneui/themed';


export class Agenda extends Component{
    render(){
        return(
            <View>
                <Text style={styler.titulo}>Ensaios Locais</Text>

                <Text style={styler.subtitulo}>Indiara - Central</Text>
                <Text style={styler.texto}>1° quarta feira do mes</Text>
                <Divider/>

                <Text style={styler.subtitulo}>Indiara - Vale do Sol</Text>
                <Text style={styler.texto}>3° quarta feira dos meses impares</Text>

                <Divider/>
                
                <Text style={styler.subtitulo}>Indiara - Vale do Sol</Text>
                <Text style={styler.texto}>3° quarta feira dos meses impares</Text>

                <Divider/>
                
                <Text style={styler.subtitulo}>Indiara - Vale do Sol</Text>
                <Text style={styler.texto}>3° quarta feira dos meses impares</Text>

                <Divider/>
                
                <Text style={styler.subtitulo}>Indiara - Vale do Sol</Text>
                <Text style={styler.texto}>3° quarta feira dos meses impares</Text>

                <Divider/>
                
                <Text style={styler.subtitulo}>Indiara - Vale do Sol</Text>
                <Text style={styler.texto}>3° quarta feira dos meses impares</Text>

                <Divider/>
                
                <Text style={styler.subtitulo}>Indiara - Vale do Sol</Text>
                <Text style={styler.texto}>3° quarta feira dos meses impares</Text>

                
                
            </View>
        )
    }
}