const express = require('express');
const app = express();
const branch = require('wakaflaka');
const renderer = require('./dist/serverRenderer');

app.use('/branch', branch);
app.get('/', (req, res, next) => {
  const responseText = renderer({ message: 'hello' });
  res.send(responseText);
});

app.listen(3000, () => {
  console.log(`App listening on port 3000!`);
});
