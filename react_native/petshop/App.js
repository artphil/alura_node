import React from 'react';
import { StyleSheet } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Rotas from './src/Rotas';
import TelaPadrao from './src/componentes/TelaPadrao';

export default function App() {
  return <TelaPadrao>
    <Rotas />
  </TelaPadrao>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
