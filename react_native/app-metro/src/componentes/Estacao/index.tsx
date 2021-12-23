import * as React from 'react';
import { Card, Paragraph, Title } from 'react-native-paper';

interface Props {
  dados: TEstacao
}

function Estacao({ dados }: Props) {
  const [aberto, setAberto] = React.useState(false);
  return (
    <Card onPress={() => setAberto(!aberto)}>
      <Card.Title
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