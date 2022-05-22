import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import { App } from './App';


createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          amount: 12000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: '2022-05-20',
          userId: 1
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 1100,
          type: 'withdraw',
          category: 'Casa',
          createdAt: '2022-05-10',
          userId: 1
        },
        {
          id: 3,
          title: 'Parcela Cozinha',
          amount: 1780,
          type: 'withdraw',
          category: 'Casa',
          createdAt: '2022-05-09',
          userId: 1
        },
        {
          id: 4,
          title: 'Carro Novo',
          amount: 22800,
          type: 'withdraw',
          category: 'Casa',
          createdAt: '2022-05-08',
          userId: 1
        }
      ]
    })


   
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

