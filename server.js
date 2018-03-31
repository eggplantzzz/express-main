const express = require('express');
const app = express();
const branch = require('branch');

app.get('/branch', branch);

app.get('/', (req, res, next) => res.send("You've reached the last route!"));
