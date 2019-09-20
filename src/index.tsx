import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';

let value = 0;

ReactDOM.render(<App interval={10} function={(): number => {
    value += 100;
    return value;
}}/>, document.getElementById('root'));
serviceWorker.register();
