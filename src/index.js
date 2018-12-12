import React from 'react';
import ReactDOM from 'react-dom';

//Import Boostrap
import 'bootstrap/dist/css/bootstrap.min.css'

//Import Router
import {BrowserRouter} from 'react-router-dom';

import App from './App';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));
