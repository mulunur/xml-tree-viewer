import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="App">
      { <header className="App-header">
      </header> }
        <h3 id='file-path'></h3>
        <textarea id='opened-file'></textarea>
    </div>
  );
}

export default App;
