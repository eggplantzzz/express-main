import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app';
import template from './template';

module.exports = (props) => {
  const { message } = props;
  const content = ReactDOMServer.renderToString(<App message={message} />);
  return template(content, props);
}
