import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'
import AppRoute from './route';
import { ContextProvider } from './Context';
 
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <AppRoute/> 
  </ContextProvider>
 
 

);
 
