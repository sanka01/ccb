import { StyleSheet } from "react-native"
import '@expo/match-media'
import { useMediaQuery } from "react-responsive"

const branco = "#fff"
const preto ="#000"
const azulClaro = "#D4D9E2"
const azulEscuro = "#033d60"


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
            color: azulEscuro,
            textAlign: "center",
            alignSelf: "center",
            padding: 15,
            borderRadius: 5,
            margin: 10,
            borderWidth: 1,
            borderColor: azulEscuro
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
            /* width: 400, */
            height: 50,
            backgroundColor: azulClaro,
            justifyContent: "center",
            textAlign: "center",
            borderRadius: 10,
            margin: 5,
        },
        botao_quadrado: {
            width: "49%",
            height: "99%",
            backgroundColor: azulClaro,
            textAlign: "center",
            borderColor: azulEscuro,
            borderWidth: 1,
            borderRadius: 10
        },
        texto: {
            color: azulEscuro,
            textAlign: "center",
            padding: 10,
            fontSize: 20,
        },
        textoInput: {
            padding: 10,
            fontSize: 16,
            color: preto, 
            borderBottomColor: azulEscuro, 
            borderBottomWidth: 1, 
            borderRadius: 15
        },
        itemMusico: {
            backgroundColor: azulClaro,
            padding: 10,
            marginVertical: 2,
            marginHorizontal: 5,
        },
        tituloMusico: {
            fontSize: 18,
            color: azulEscuro
        },
        input: {
            borderRadius: 5,
            borderColor: '#ccc',
            borderWidth: 1,
            borderTopColor: "#FFF",
            padding: 10,
            marginBottom: 10,
            width: '100%',
            backgroundColor: '#fff',
            color: '#000',
          },

    }
)
