/* 
  Tela principal do programa
  É sempre a primeira tela chamada, a partir da qual 
  todas as outras telas podem ser chamadas.
*/
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navegador from './Navegador';

function App() {
  return (
  <>
    <StatusBar />
    <Navegador />
  </>
  );
}

export default App;
