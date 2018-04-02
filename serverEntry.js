import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from './app';

ReactDOMServer.renderToString(
  <App />,
  document.getElementById('main')
);
