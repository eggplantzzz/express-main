const express = require('express');
const app = express();
const branch = require('wakaflaka');

app.use('/branch', branch);
app.get('/', (req, res, next) => res.send('This is the last route in the main app.'));

app.listen(3000, () => {
  console.log(`App listening on port 3000!`);
});
