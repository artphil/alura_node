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
    <Card onPress={() => setAberto(!aberto)}>
      <Card.Title
      left={(props) => <Avatar.Icon {...props} icon={icone} style={estilos.avatar}/>}
        title={dados.nome}
        subtitle={dados.desc}
      />
      {aberto &&
        <Card.Content>
          <Paragraph>Entorno</Paragraph>
          {dados.arredores.map(item => 
            <List.Item
            title={item}
            left={props => <List.Icon {...props} icon="arrow-right" />}
            />
            )}
          <Paragraph>Informações</Paragraph>
          <Text>{dados.info}</Text>

        </Card.Content>
      }
    </Card>
  );
}

export default Estacao;