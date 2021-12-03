import React from "react";
import { Button, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Botao from "../../../componentes/Botao";

import Texto from "../../../componentes/Texto";

export default function Detalhes({
    nome, 
    logoFazenda,
    nomeFazenda,
    descricao,
    preco,
    botao,
}) {
    return <>
        <Texto style={estilos.nome} >{ nome }</Texto>
        <View style={estilos.fazenda}>
            <Image source={ logoFazenda } style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={estilos.dercricao}>{ descricao }</Texto>
        <Texto style={estilos.preco}>{ preco }</Texto>
        <Botao>{ botao }</Botao>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    dercricao: {
        color: "#A3A3A3",
        lineHeight: 26,
        fontWeight: "bold",
        fontSize: 16,
    }, 
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
});