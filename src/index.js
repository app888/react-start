import React, { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client';
import App from './App'
//import App from './Api';

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
