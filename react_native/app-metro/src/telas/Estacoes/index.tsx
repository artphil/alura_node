import * as React from 'react';

import { Title } from 'react-native-paper';

import estacoes from '../../../api/Api';
import Estacao from '../../componentes/Estacao';

function Estacoes() {
  return (<>
    <Title>Estações</Title>
    {
      estacoes.map(estacao => {
        <Estacao dados={estacao} />
      })
    }
  </>
  );
}

export default Estacoes;