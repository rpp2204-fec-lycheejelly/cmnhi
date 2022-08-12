const express = require('express');
require('dotenv').config();
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());


let port = 4000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});