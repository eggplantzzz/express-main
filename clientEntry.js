import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

const message = JSON.parse(window.__data);

ReactDOM.render(
  <App message={message} />,
  document.getElementById('main')
);
