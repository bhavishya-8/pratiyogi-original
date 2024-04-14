import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './components/pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  // </React.StrictMode>
);