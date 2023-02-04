import { StyleSheet } from "react-native"
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
            color: "#fff",
            textAlign: "center",
            alignSelf: "center",
            padding: 15,
            borderRadius: 5,
            margin: 10,
            backgroundColor: "#245975"
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
            backgroundColor: "#245975",
            color: "#fff",
            padding: 50
        },
        subtitulo: {
            fontSize: 18,
            paddingTop: 20,
            alignSelf: "center"
        },
        botao: {
            width: 300,
            height: 50,
            backgroundColor: "#02A1F5",
            justifyContent: "center",
            textAlign: "center",
            borderColor: "#014D75",
            borderWidth: 1,
            borderRadius: 25
        },
        botao_quadrado: {
            width: 150,
            height: 150,
            backgroundColor: "#02A1F5",
            justifyContent: "center",
            textAlign: "center",
            borderColor: "#014D75",
            borderWidth: 1,
            borderRadius: 25
        },
        texto: {
            color: "#fff",
            textAlign: "center",
            padding: 10,
            fontSize: 20,
        },

    }
)
