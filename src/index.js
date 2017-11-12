import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, } from 'react-router-dom'


import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import NewTest from './components/new_test';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route component={Header} />
                <Route path='/' component={App} />
                <Route path='/new-test' component={NewTest} />
                <Route component={Footer} />
            </div> 
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
