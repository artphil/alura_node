import { useState } from 'react';

import { Avatar, Card, Paragraph, Title } from 'react-native-paper';
import icone from '../../../assets/images/favicon.png'
import estilos from './estilos';

interface Props {
  dados: TEstacao
}

function Estacao({ dados }: Props) {
  const [aberto, setAberto] = useState(false);
  return (
    <Card onPress={() => setAberto(!aberto)}>
      <Card.Title
      left={(props) => <Avatar.Icon {...props} icon={icone} style={estilos.avatar}/>}
        title={dados.nome}
        subtitle={dados.desc}
      />
      {aberto &&
        <Card.Content>
          <Paragraph>{dados.info}</Paragraph>
        </Card.Content>
      }
    </Card>
  );
}

export default Estacao;