import { fireEvent, render, screen } from "@testing-library/react"
import { useNavigate } from "react-router-dom"
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
  })
})