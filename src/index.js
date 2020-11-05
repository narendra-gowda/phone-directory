import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/common.css';
import './AddSubscriber.css';
import App from './App';
import AddSubscriber from './AddSubscriber';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AddSubscriber />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
