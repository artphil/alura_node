import * as React from 'react';
import { Ionicons  as ExpoIcon } from '@expo/vector-icons';
interface Props {
  nome: any,
  tamanho?: number,
  cor?: string
}

function Icone({ nome, tamanho = 18, cor = '#000' }: Props) {
  return ( 
      <ExpoIcon name={nome} size={tamanho} color={cor} />
   );
}

export default Icone;