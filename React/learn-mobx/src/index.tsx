import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoList } from './TodoList'
import { ObservableTodoStore } from './stores/ObservableTodoStore'
import { CounterStore } from './stores/CounterStore';

const observableTodoStore = new ObservableTodoStore();
const counterStore = new CounterStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App counterStore={counterStore}/>
    <TodoList store={observableTodoStore} />

  </React.StrictMode>
);
