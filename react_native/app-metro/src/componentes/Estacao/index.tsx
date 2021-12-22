import * as React from 'react';
import { Card, Paragraph, Title } from 'react-native-paper';

import {Estacao as Data} from '../../../api/Api'

function Estacao({ dados:Data }) {
  return (
    <>
    <Title>Teste</Title>
    <Card>
      <Card.Content>
        <Title>Nome {dados.nome}</Title>
        <Paragraph>{dados.info}</Paragraph>
      </Card.Content>
    </Card>
    </>
  );
}

export default Estacao;