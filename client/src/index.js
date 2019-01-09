import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom'

//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './components/App'
import thunk from 'redux-thunk'


const createStoreWithMiddlewares = applyMiddleware(thunk)(createStore);

export const store = createStoreWithMiddlewares(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(
    <Provider
        store={store}
    >
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
