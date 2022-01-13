import * as React from 'react';
import TestRenderer from "react-test-renderer"

import App from "../src"

describe("Componente App", () => {
  test("gera o mesmo Snapshot", () => {
    const tree: any = TestRenderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})