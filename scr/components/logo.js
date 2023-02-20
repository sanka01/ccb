import React, { Component } from "react";
import { Image, View, StyleSheet } from "react-native";
const style = StyleSheet.create({
    container: {
        paddingTop: 0,
        maxHeight: 100,
        justifyContent: "center",
        alignItems: "center",

    },
    logo: {
        width: 100,
        height: 50,
    },

})

export class Logo extends Component {

    render() {
        return (
            <View style={style.container}>
                <Image
                    style={style.logo}
                    source={require("./logo.png")}
                />

            </View>
        )
    }
}