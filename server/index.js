require('dotenv').config();
const express = require('express');
const axios = require('axios');
const overview = require('./controllers/overview.js');
const {getQAList} = require('./controllers/qa.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

let port = process.env.PORT;

//Product Overview Routes

app.get('/products/:product_id', (req, res) => {
  overview.getProduct(req, res);
})

app.get('/reviews/meta/:product_id', (req, res) => {
  overview.getReviewData(req, res);
})


//Question and Answer Routes
app.get('/qa/questions', (req, res) => {
  return getQAList()
  .then(result => {
    // console.log('app.get result', result);
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  })
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});