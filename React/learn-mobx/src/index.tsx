import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import { store, CounterStore, ObservableTodoStore } from './Stores';

import Counter from './Counter';
import TodoList from './TodoList'

import { SmartTodo } from './Components/SmartTodo';

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
      <SmartTodo />
    </Provider >
  </React.StrictMode >
);
