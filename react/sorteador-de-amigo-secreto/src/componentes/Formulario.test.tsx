import { act, fireEvent, render, screen } from '@testing-library/react';

import Formulario from './Formulario';
import { RecoilRoot } from 'recoil';


describe('o comportamento do Formulario', () => {

  test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(
    <RecoilRoot>
<Formulario />
    </RecoilRoot >
  )
// encontrar no DOM o input
const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
// encontear o botão
const botao = screen.getByRole('button')
// garantir que o innput esteja no documento
expect(input).toBeInTheDocument()
// garaantir que o botão esteja desebilitado
expect(botao).toBeDisabled()
})

test('aiciona um participante caso exista um nome preenchido', () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  )
  // encontrar no DOM o input
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  // encontear o botão
  const botao = screen.getByRole('button')
  // inserir um valor no input
  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina'
    }
  })
  // clicar no botao submeter
  fireEvent.click(botao)
  // garantir que o input esteja com foco ativo
  expect(input).toHaveFocus()
  // garantir que o input não tenha um valor
  expect(input).toHaveValue('')
})

test('nomes duplicados não podem ser adicionados na lista', () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  )
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  const botao = screen.getByRole('button')
  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina'
    }
  })
  fireEvent.click(botao)
  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina'
    }
  })
  fireEvent.click(botao)

  const mensagemDeErro = screen.getByRole('alert')

  expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
})

test('a mensgem de erro deve sumir apos os timers', () => {
  jest.useFakeTimers()
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  )
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  const botao = screen.getByRole('button')
  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina'
    }
  })
  fireEvent.click(botao)
  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina'
    }
  })
  fireEvent.click(botao)

  let mensagemDeErro = screen.queryByRole('alert')
  expect(mensagemDeErro).toBeInTheDocument()

  act(() => {
    jest.runAllTimers()
  })

  mensagemDeErro = screen.queryByRole('alert')
  expect(mensagemDeErro).toBeNull()
})

})