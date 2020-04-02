import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SiddhuFirstFunctionComponent from './Component/SiddhuFirstFunctionComponent'
import MainComponent from './Component/MainComponent'
import * as serviceWorker from './serviceWorker'


//ReactDOM.render(<App />, document.getElementById('root'));
//Now we will upload our component for testing
ReactDOM.render(<MainComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
