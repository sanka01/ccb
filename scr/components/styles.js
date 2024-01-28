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
            margin: 'auto',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: "space-evenly",
            alignContent: 'space-around',
            alignItems: "center",
            marginBottom: 20,
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
        botao_deletar:{
            backgroundColor: "#F53F3C",
            marginTop: 10
        },
        botao: {
            width: '85%',
            alignSelf: 'center',
            marginBottom: 18,
            height: 50,
            backgroundColor: azulClaro,
            justifyContent: "center",
            textAlign: "center",
            borderRadius: 10,
            shadowColor: preto,
            elevation: 10,
            borderWidth: 0.5,
            borderColor: preto
        },
        botao_quadrado: {
            width: 160,
            height: 160,
            backgroundColor: azulClaro,
            textAlign: "center",
            borderColor: azulEscuro,
            borderWidth: 1,
            borderRadius: 20,
            shadowColor: preto,
            elevation: 10,
        },
        texto_menu: {
            height: "100%",
            textAlignVertical: "center",
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
            marginVertical: 5,
            marginHorizontal: 15,
            elevation: 5,
            borderWidth: 0.5,
            borderRadius: 10,
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
