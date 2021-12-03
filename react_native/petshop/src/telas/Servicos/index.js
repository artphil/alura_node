import React from 'react';
import { FlatList } from 'react-native';

import Item from './Item';

// import mock from '../../../mocks/servicos';

const servicos = [
    { 
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Não dê banho no seu gato.kkk"
    },
    { 
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4."
    },
    { 
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrábica."
    }
];

export default function Servicos() {
    return <>
        <FlatList
            data={servicos}
            removeClippedSubviews={false}
            renderItem={({ item }) => <Item {...item} /> }
            keyExtractor={({id}) => String(id)}
        ></FlatList>
    </> 
}
