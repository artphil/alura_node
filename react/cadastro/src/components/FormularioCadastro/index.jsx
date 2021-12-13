import React, { useState } from 'react';

import { Button, FormControlLabel, Switch, TextField } from '@mui/material'
import { getThemeProps } from '@mui/system';


function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: '' } });

  return (
    <form
      onSubmit={evento => {
        evento.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        value={nome}
        onChange={evento => {
          setNome(evento.target.value);
        }}
        variant="outlined"
        fullWidth
        margin='normal'
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        value={sobrenome}
        onChange={evento => {
          setSobrenome(evento.target.value);
        }}
        variant="outlined"
        fullWidth
        margin='normal'
      />
      <TextField
        id="cpf"
        label="CPF"
        value={cpf}
        onChange={evento => {
          setCpf(evento.target.value);
        }}
        onBlur={evento => {
          const ehValido = validarCPF(cpf);
          setErros({...erros, cpf:ehValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        variant="outlined"
        fullWidth
        margin='normal'
      />
      <FormControlLabel
        label='Promoções'
        control={
          <Switch
            name='promocoes'
            checked={promocoes}
            onChange={evento => {
              setPromocoes(evento.target.checked);
            }}
          />
        }
      />
      <FormControlLabel
        label='Novidades'
        control={
          <Switch
            name='novidades'
            checked={novidades}
            onChange={evento => {
              setNovidades(evento.target.checked);
            }}
          />
        }
      />

      <Button type='submit' variant='contained' color='primary'>
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;