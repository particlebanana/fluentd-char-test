var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('·');
  console.log('–');
  console.log('«');
  console.log('»');
  res.send('Logged some characters.');
});

var PORT = process.env.port || 3000;

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!');
});
