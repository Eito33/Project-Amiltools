// Import React
import React from 'react';
import ReactDOM from 'react-dom';

//Import BootStrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Router
import { BrowserRouter } from 'react-router-dom'

//Import App Component
import App from './App';

// Start Application
ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    , document.getElementById('root'));


