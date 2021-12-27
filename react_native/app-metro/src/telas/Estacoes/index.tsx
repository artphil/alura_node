import { ScrollView, View } from 'react-native';

import { Headline, List } from 'react-native-paper';

import { estacoes } from '../../../api/estacao';
import Estacao from '../../componentes/Estacao';
import estilos from './estilos';


function Estacoes() {
  return (<>
    <View style={estilos.container}>
      <Headline style={estilos.titulo}>Estações</Headline>
    </View>
    <ScrollView>
      <List.Section style={estilos.listContainer}>
        {
          estacoes.map(estacao =>
            <Estacao dados={estacao} key={estacao.id} />
          )
        }
      </List.Section>
    </ScrollView>
  </>
  );
}

export default Estacoes;