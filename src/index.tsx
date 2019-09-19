import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App interval={1000} function={(): number => {
    return 10;
}}/>, document.getElementById('root'));
serviceWorker.register();
