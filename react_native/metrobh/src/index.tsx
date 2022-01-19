/* 
  Tela principal do programa
  É sempre a primeira tela chamada, a partir da qual 
  todas as outras telas podem ser chamadas.
*/
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navegador from './Navegador';

function App() {
  return (
  <>
    <StatusBar />
    <Navegador />
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
