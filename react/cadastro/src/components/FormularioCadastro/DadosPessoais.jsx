import React, { useContext, useState } from 'react';

import { Button, FormControlLabel, Switch, TextField } from '@mui/material'
import ValidacoesCadastro from '../../contexts/validacoes';


function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({
    cpf: { valido: true, texto: '' },
    nome: { valido: true, texto: '' },
  });

  const validacoes = useContext(ValidacoesCadastro);

  function validarCampos(evento) {
    const { name, value } = evento.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
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
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        id="nome"
        name="nome"
        label="Nome"
        value={nome}
        onChange={evento => {
          setNome(evento.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        variant="outlined"
        margin='normal'
        fullWidth
        required
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        value={sobrenome}
        onChange={evento => {
          setSobrenome(evento.target.value);
        }}
        variant="outlined"
        margin='normal'
        fullWidth
        required
      />
      <TextField
        id="cpf"
        name="cpf"
        label="CPF"
        value={cpf}
        onChange={evento => {
          setCpf(evento.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        variant="outlined"
        margin='normal'
        fullWidth
        required
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
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;