import { StyleSheet } from "react-native"
import '@expo/match-media'
import { useMediaQuery } from "react-responsive"

const branco = "#fff"
const azulClaro = "#02A1F5"
const azulEscuro = "#245975"


export const styler = StyleSheet.create(
    {

        container: {
            padding: 20,
        },
        container_row: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
        },
        quadro_info: {
            fontSize: 14,
            color: branco,
            textAlign: "center",
            alignSelf: "center",
            padding: 15,
            borderRadius: 5,
            margin: 10,
            backgroundColor: azulEscuro
        },
        row: {
            flexDirection: "row",
            justifyContent: "space-evenly",
        },

        container_column: {

            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
        },
        titulo: {
            fontSize: 20,
            backgroundColor: azulEscuro,
            color: branco,
            padding: 25,
            textAlign: "center"
        },
        subtitulo: {
            fontSize: 18,
            paddingTop: 20,
            alignSelf: "center"
        },
        botao: {
            width: 300,
            height: 50,
            backgroundColor: azulClaro,
            justifyContent: "center",
            textAlign: "center",
            borderColor: azulEscuro,
            borderWidth: 1,
            borderRadius: 25
        },
        botao_quadrado: {
            width: 150,
            height: 150,
            backgroundColor: azulClaro,
            justifyContent: "center",
            textAlign: "center",
            borderColor: azulEscuro,
            borderWidth: 1,
            borderRadius: 25
        },
        texto: {
            color: branco,
            textAlign: "center",
            padding: 10,
            fontSize: 20,
        },
        textoInput: {
            padding: 10,
            fontSize: 16,
            color: "#000", 
            borderBottomColor: "#517FFC", 
            borderBottomWidth: 1, 
            borderRadius: 15
        },
        itemMusico: {
            backgroundColor: azulEscuro,
            padding: 5,
            marginVertical: 2,
            marginHorizontal: 5,
        },
        tituloMusico: {
            fontSize: 18,
            color: branco
        }

    }
)
