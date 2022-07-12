import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Formulario from './Formulario';

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
  render(<Formulario/>)

  // encontrar no DOM o input
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

  // encontear o botão
  const botao = screen.getByRole('button')

  // garantir que o innput esteja no documento
  expect(input).toBeInTheDocument()
  // garaantir que o botão esteja desebilitado
  expect(botao).toBeDisabled()
})