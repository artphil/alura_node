import * as React from 'react';
import renderer, { ReactTestRendererJSON } from "react-test-renderer"
import { render, fireEvent } from '@testing-library/react-native';

import Navegador from "../src"

describe("Componente Navegador", () => {
  test("gera o mesmo Snapshot", () => {
    const tree = render(<Navegador />).toJSON()
    expect(tree).toMatchSnapshot();
  })

  test("tem 2 filhos", () => {
    const componente = render(<Navegador />);
    expect(componente.container.children.length).toBe(2);
  })
})