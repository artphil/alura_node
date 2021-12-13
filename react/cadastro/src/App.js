import './App.css';

import { Container, Typography } from '@mui/material';
import '@fontsource/roboto';

import FormularioCadastro from './components/FormularioCadastro';

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


      <h1>Formulário de cadastro</h1>
      <FormularioCadastro aoEnviar={aoEnviar} validarCPF={validaCpf}/>
    </Container>
  );
}

function aoEnviar(dados){
  console.log(dados);
}

function validaCpf(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:'CPF deve ter 11 digitos.'};
  }
  return {valido:true, texto:''};
}

export default App;
