import * as React from 'react';
import renderer, { ReactTestRendererJSON } from "react-test-renderer"

import Icone from "../../src/componentes/Icone"

describe("Componente Icone", () => {
  test("gera o mesmo Snapshot", () => {
    const tree = renderer.create(<Icone nome="map" />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})