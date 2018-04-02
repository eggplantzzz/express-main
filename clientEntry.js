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
    const NextApp = require('./app').default;
    ReactDOM.render(
      <NextApp message={message} />,
      document.getElementById('main')
    );
  })
}
