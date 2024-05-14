import Rotas from './routes';
import "./utils/globals.css";
import "./utils/globals.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Rotas />
        <ToastContainer />
    </React.StrictMode>
);

