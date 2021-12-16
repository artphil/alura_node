import React, { useState, useEffect } from 'react';

import { Step, StepLabel, Stepper, Typography } from '@mui/material';

import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';


function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1)
      aoEnviar(dadosColetados);
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant='h5'>Obridado pelo cadastro</Typography>
  ];

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function coletarDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    proximo();
  }

  return (<>
  <Stepper activeStep={etapaAtual}>
  <Step><StepLabel>Login</StepLabel></Step>
  <Step><StepLabel>Pessoap</StepLabel></Step>
  <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
   {formularios[etapaAtual]} 
   </>);
}

export default FormularioCadastro;