import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"

import { useListaParticipantes } from "../state/hook/useListaParticipantes"

import Rodape from "./Rodape"


jest.mock('../state/hook/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn()
  }
})

const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavegacao
  }
})

const mockSorteador = jest.fn()
jest.mock('../state/hook/useSorteador', () => {
  return {
    useSorteador: () => mockSorteador
  }
})

describe('quando não existem participantes suficientes', () => {

  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([])
  })

  test('a brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )
    const botao = screen.getByRole('button')

    expect(botao).toBeDisabled()
  })
})

describe('quando existem participantes suficientes', () => {

  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(['João', 'Amanda', 'Carlos'])
  })

  test('a brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )
    const botao = screen.getByRole('button')

    expect(botao).not.toBeDisabled()
  })

  test('a brincadeira foi iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )
    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    expect(mockNavegacao).toHaveBeenCalledTimes(1)
    expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
    expect(mockSorteador).toHaveBeenCalledTimes(1)
  })
})