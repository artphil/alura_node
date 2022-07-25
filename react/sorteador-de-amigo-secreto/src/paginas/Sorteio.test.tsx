import { act, fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"

import { useListaParticipantes } from "../state/hook/useListaParticipantes"
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio"

import Sorteio from "./Sorteio"

jest.mock('../state/hook/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn()
  }
})

jest.mock('../state/hook/useResultadoSorteio', () => {
  return {
    useResultadoSorteio: jest.fn()
  }
})

describe('na pagina de sorteio', () => {

  const participantes = ['Catarina', 'Ana', 'Jarel']
  const resultado = new Map([
    ['Ana', 'Catarina'],
    ['Catarina', 'Jarel'],
    ['Jarel', 'Ana'],
  ])

  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  })

  test('todos os participantes podem exibir seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )
    const opcoes = screen.queryAllByRole('option')
    expect(opcoes).toHaveLength(participantes.length + 1)
  })

  test('o amigo secreto é exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )
    const seletor = screen.getByPlaceholderText('Selecione o seu nome')
    fireEvent.change(seletor, {
      target: {
        value: participantes[0]
      }
    })

    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    const amigoSecreto = screen.getByRole('alert')
    expect(amigoSecreto).toBeInTheDocument()
  })

  test('esconde o amigo secreto sorteado depois de 5 segundos', async () => {
    jest.useFakeTimers();

    render(
        <RecoilRoot>
            <Sorteio />
        </RecoilRoot>
    )

    const select = screen.getByPlaceholderText('Selecione o seu nome')
    fireEvent.change(select, { target: { value: participantes[1] } })

    const button = screen.getByRole('button')
    fireEvent.click(button)
    act(() => {
        jest.runAllTimers();
    })
    const alerta = screen.queryByRole('alert')
    expect(alerta).not.toBeInTheDocument()
})
})