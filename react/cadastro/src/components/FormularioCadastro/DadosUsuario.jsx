import React, { useContext, useState } from 'react';

import { Button, TextField } from '@mui/material';

import ValidacoesCadastro from '../../contexts/validacoes';


function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({ senha: { valido: true, texto: '' } });

  const validacoes = useContext(ValidacoesCadastro);

  function validarCampos(evento) {
    console.log('valid:',validacoes);
    const { name, value } = evento.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if(!erros[campo].valido){
        return false;
      }
      return true;
    }
  }

  return (
    <form
      onSubmit={evento => {
        evento.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={evento => { setEmail(evento.target.value) }}
        id='email'
        name='email'
        label='Email'
        type='email'
        variant="outlined"
        margin='normal'
        fullWidth
        required
      />

      <TextField
        value={senha}
        onChange={evento => { setSenha(evento.target.value) }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id='senha'
        name='senha'
        label='Senha'
        type='password'
        variant="outlined"
        margin='normal'
        fullWidth
        required
      />
      <Button type='submit' variant='contained' color='primary'>
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;