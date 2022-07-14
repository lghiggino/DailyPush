import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoList } from './TodoList'
import { ObservableTodoStore } from './Stores/ObservableTodoStore'
import { CounterStore } from './Stores/CounterStore';
import { SmartTodo } from './Components/SmartTodo';

if (!new class { x:any }().hasOwnProperty('x')) throw new Error('Transpiler is not configured correctly');

const observableTodoStore = new ObservableTodoStore();
const counterStore = new CounterStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App counterStore={counterStore}/>
    <TodoList store={observableTodoStore} />
    <SmartTodo />
  </React.StrictMode>
);
