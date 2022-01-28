import * as React from 'react';
import renderer, { ReactTestRendererJSON } from "react-test-renderer"

import App from "../src"

describe("Componente App", () => {
  test("gera o mesmo Snapshot", () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot();
  })

  test("tem 2 filhos", () => {
    const tree = renderer.create(<App />).toJSON() as ReactTestRendererJSON
    expect(tree?.children?.length).toBe(2);
  })
})