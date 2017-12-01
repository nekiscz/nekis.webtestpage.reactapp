import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';


import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import NewTest from './components/new_test';
import RunningTest from './components/running_test';
import TestDetail from './components/detail_test';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route component={Header} />
                <Switch>
                <Route path='/tests/running/:id' component={TestDetail} />
                <Route path='/tests/running' component={RunningTest} />
                <Route path='/tests/new' component={NewTest} />
                <Route path='/tests/:id' component={TestDetail} />
                    <Route path='/' component={App} />
                </Switch>
                <Route component={Footer} />
            </div>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
