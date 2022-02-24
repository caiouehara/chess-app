const express = require('express');
const path = require('path');

const app = new express();

const pathName = path.join(__dirname, '/index.html');
const port = process.env.PORT || 8080;


app.get('/', function(req, res) {
  res.sendFile(pathName);
});

app.use(express.static(''))

app.listen(port);
console.log('Server started at http://localhost:' + port);
console.log('Hosting: ' + pathName);