import React from 'react';

import { render, screen } from '@testing-library/react';

import App, { calcularNovoSaldo } from './App';

describe('Componente principal', () => {
  describe('Quando eu abro o app do banco', () => {

    test('o nome é exibido', () => {
      render(<App />);
      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    });

    test('o saldo é exibido', () => {
      render(<App />);
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    });

    test('o botão de transção é exibido', () => {
      render(<App />);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    });
    
  });

  describe('Quando eu realizo uma transação', () => {
    test('que é saque, o valor vai diminuir', () => {
      const valores = {
        transacao: 'saque',
        valor: 50
      };
      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(100);
    });
  });
})