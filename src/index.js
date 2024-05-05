import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// in order to wire up a react/redux app, we need react-redux by installing it
// we need a provider component from react-redux, to be around everything
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { createStore } from 'redux';

const theStore = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={theStore}>
    <App />
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

