import './App.css';

import { Container, Typography } from '@mui/material';
import '@fontsource/roboto';

import FormularioCadastro from './components/FormularioCadastro';
import { validarCpf, validarSenha } from './models/cadastro';
import ValidacoesCadastro from './contexts/validacoes';

function App() {
  return (
    <Container maxWidth='sm' component='article'>
      <Typography
        variant='h3'
        component='h1'
        align='center'
      >
        Formulário de cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCpf, senha: validarSenha, nome: validarSenha }}
      >
        <FormularioCadastro aoEnviar={aoEnviar} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviar(dados) {
  console.log(dados);
}

export default App;
