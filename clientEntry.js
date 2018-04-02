import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

const messageData = window.__data;
const { message } = messageData;

ReactDOM.render(
  <App message={message} />,
  document.getElementById('main')
);
