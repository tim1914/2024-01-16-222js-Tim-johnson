var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(9001);
console.log('Listening on port 9001');
console.log('http://localhost:9001');