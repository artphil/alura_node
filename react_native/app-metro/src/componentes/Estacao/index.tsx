import { useState } from 'react';

import { Avatar, Card, List, Paragraph, Text } from 'react-native-paper';
import icone from '../../../assets/images/favicon.png'
import estilos from './estilos';

interface Props {
  dados: TEstacao
}

function Estacao({ dados }: Props) {
  const [aberto, setAberto] = useState(false);
  return (
    <List.Accordion
    style={estilos.container}
      title={dados.nome}
      description={dados.desc}
      left={(props) => <Avatar.Icon {...props} icon={icone} style={estilos.avatar} />}
      expanded={aberto}
      onPress={() => setAberto(!aberto)} >
      <Paragraph style={estilos.titulo}>Entorno</Paragraph>
      {dados.entorno.map((item, i) =>
        <List.Item
          key={i}
          style={estilos.item}
          title={item}
          left={props => <List.Icon {...props} icon="arrow-right" />}
        />
      )}
      <Paragraph style={estilos.titulo}>Informações</Paragraph>
      <List.Item
          style={estilos.item}
          title={dados.info}
          left={props => <List.Icon {...props} icon="grid" />}
        />
    </List.Accordion>
  );
}

export default Estacao;