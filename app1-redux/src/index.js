import React from 'react';
import Redux from 'redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './reducers/index';

const render = () => ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById('root'));
render();
store.subscribe(render);

registerServiceWorker();


