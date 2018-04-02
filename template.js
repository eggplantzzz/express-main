module.exports = (content, props) => {
  return `
    <!doctype html>
    <html>
    <head>
    </head>
    <body>
      <script>window.__data = ${JSON.stringify(props)}</script>
      <div id="main">${content}</div>
      <script src="bundle.js"></script>
    </body>
    </html>
  `
}
