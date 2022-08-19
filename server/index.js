require('dotenv').config();
const express = require('express');
const axios = require('axios');
const getAllProducts = require('./controllers/overview.js').getAllProducts;
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

let port = process.env.PORT;

//Product Overview Routes

app.get('/products', (req, res) => {
  getAllProducts(req, res);
})


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});