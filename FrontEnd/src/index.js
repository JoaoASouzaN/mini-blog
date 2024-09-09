import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Corrija o caminho para o CSS, se necessário
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);