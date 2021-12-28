import React, { useState } from "react";
import { ThemeProvider } from "styled-components";


import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import GlobalStyle from "./Components/GlobalStyled";
import SwitcherTema from "./Components/SwitcherTema";
import { BotaoTema } from "./Components/UI";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema(!tema);
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BotaoTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BotaoTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
