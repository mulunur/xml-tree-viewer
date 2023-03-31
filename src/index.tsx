import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TreeView from './treeview/tree_view';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
    <TreeView {}/>
  </React.StrictMode>
);
