import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './hr/sagas';
import routes from './routes';
import reducers from './reducers';
import { setDispatch } from 'helpers/reduxStore';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];
const devTools = window.devToolsExtension || (() => f => f);
const enhancers = [applyMiddleware(...middleWares), devTools()];

(() => {

    const store = createStore(reducers(), {}, compose(...enhancers));
    sagaMiddleware.run(rootSaga);
    setDispatch(store.dispatch);

    const history = syncHistoryWithStore(hashHistory, store);
    ReactDOM.render(<Provider store={store}><Router history={history} routes={routes}></Router></Provider>, document.getElementById('root'));
})();
 