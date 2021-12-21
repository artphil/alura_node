import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './App';

describe('Componente principal', () => {
  describe('Quando eu abro o app do banco', () => {

    test('O nome é exibido', () => {
      render(<App />);
      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    })

    test('O saldo é exibido', () => {
      render(<App />);
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    })

    test('O botão de transção é exibido', () => {
      render(<App />);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    })
    
  })
})