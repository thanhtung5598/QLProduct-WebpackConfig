import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App/App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducers/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js';

const store = createStore(
    appReducer,
    applyMiddleware(thunk),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
