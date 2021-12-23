import { Headline } from 'react-native-paper';

import estacoes from '../../../api/estacao';
import Estacao from '../../componentes/Estacao';

function Estacoes() {
  return (
    <>
      <Headline>Estações</Headline>
      {
        estacoes.map(estacao =>
          <Estacao dados={estacao} key={estacao.id} />
        )
      }
    </>
  );
}

export default Estacoes;