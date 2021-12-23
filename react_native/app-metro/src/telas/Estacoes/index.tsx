import { View } from 'react-native';

import { Headline } from 'react-native-paper';

import estacoes from '../../../api/estacao';
import Estacao from '../../componentes/Estacao';
import estilos from './estilos';


function Estacoes() {
  return (
  <>
    <View style={estilos.container}>
      <Headline style={estilos.titulo}>Estações</Headline>
      </View>
      {
        estacoes.map(estacao =>
          <Estacao dados={estacao} key={estacao.id}/>
          )
        }
        </>
  );
}

export default Estacoes;