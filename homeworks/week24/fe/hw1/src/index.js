import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import blogApp from './reducers'
import promiseMiddleware from 'redux-promise-middleware';

let store = createStore(blogApp, applyMiddleware(promiseMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
