import * as React from 'react';
import renderer, { ReactTestRendererJSON } from "react-test-renderer"

import Navegador from "../src"

describe("Componente Navegador", () => {
  test("gera o mesmo Snapshot", () => {
    const tree = renderer.create(<Navegador />).toJSON()
    expect(tree).toMatchSnapshot();
  })

  test("tem 2 filhos", () => {
    const tree = renderer.create(<Navegador />).toJSON() as ReactTestRendererJSON
    console.log(tree)
    expect(tree?.children?.length).toBe(2);
  })
})