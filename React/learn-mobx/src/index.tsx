import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import { store } from './Stores';

import Counter from './Components/Counter';
import TodoList from './Components/TodoList'

import { SmartTodo } from './Components/SmartTodo';
import Pokemon from './Components/Pokemon';

if (!new class { x: any }().hasOwnProperty('x')) throw new Error('Transpiler is not configured correctly');

// const observableTodoStore = new ObservableTodoStore();
// const counterStore = new CounterStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider {...store}>
      <Counter />
      <TodoList />
      <Pokemon />
      <SmartTodo />
    </Provider >
  </React.StrictMode >
);

//https://mono.software/2019/04/16/async-webapi-calls-using-react-with-mobx/
