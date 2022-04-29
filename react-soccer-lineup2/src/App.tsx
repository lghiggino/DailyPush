import React from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './components/Field/Field';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h1>H1 in app.tsx</h1>
        <Field />
        <h1>H1 in app.tsx</h1>

      </main>
    </div>
  );
}

export default App;
