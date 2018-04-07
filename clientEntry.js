import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const messageData = window.__data;
const { message } = messageData;

ReactDOM.hydrate(
  <App message={message} />,
  document.getElementById('main')
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NewApp = require('./app').default;
    ReactDOM.render(
      <NewApp message={message} />,
      document.getElementById('main')
    );
  })
}
