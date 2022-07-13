import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListaParticipantes from "./ListaParticipantes"

describe('uma lista vazia de participantes', () => {
  test('deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes/>
      </RecoilRoot>
    )

    const itens = screen.queryAllByRole('itemList')
    expect(itens).toHaveLength(0)
  })
})