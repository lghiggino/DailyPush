import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoList } from './TodoList'
import { ObservableTodoStore } from './stores/ObservableTodoStore'

const observableTodoStore = new ObservableTodoStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <TodoList store={observableTodoStore} />

  </React.StrictMode>
);
