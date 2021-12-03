import React from "react";
import { Text, TouchableOpacity } from "react-native";

import funcaoEstilosPadrao from "./estilos";

export default function Botao({ pequeno=false, invertido=false, valor, acao, estilos }) {
    const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido)
    return <TouchableOpacity style={[estilosPadrao.botao, estilos]} onPress={acao}>
        <Text style={estilosPadrao.valor} >{valor}</Text>
    </TouchableOpacity>
}