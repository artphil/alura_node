import React from "react";
import { Text, View } from "react-native";
import Botao from "../CampoInteiro/Botao";
import estilos from "./estilos";

export default function StatusCarrinho({ total }) {
    return <View style={estilos.conteudo}>
        <View style={estilos.total}>
            <Text style={estilos.descricao}>Total do carrinho:</Text>
            <Text style={estilos.valor}>
                {
                    Intl.NumberFormat('pt-Br', {
                        style: 'currency', currency: 'BRL'
                    }).format(total)
                }
            </Text>
        </View>
        <View style={estilos.botao}>
           <Botao valor='Concluir Pedido' invertido /> 
        </View>
    </View>
}