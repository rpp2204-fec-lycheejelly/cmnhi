require('dotenv').config();
const express = require('express');
const axios = require('axios');
const overview = require('./controllers/overview.js');
const {getQAList} = require('./controllers/qa.js');
const getRelated = require('./controllers/related.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

let port = process.env.PORT;

//Product Overview Routes

app.get('/products/:product_id', (req, res) => {
  let productData = {};

  overview.getProduct(req, res)
    .then(product => {
      productData = {...product};
    })
    .then(() => {
      return overview.getReviewData(req, res)
    })
    .then(reviews => {
      let ratings = reviews.ratings;
      productData = {...productData, ratings: {...ratings}}
      return overview.getStyles(req, res);
    })
    .then(styleData => {
      productData.styles = styleData;
      res.json(productData);
    })
})


//Question and Answer Routes
app.get('/qa/questions', (req, res) => {
  return getQAList()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  })
})

//Related Products Routes
app.get('/products/:product_id/related', (req, res) => {
  getRelated(req, res)
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      console.log(err);
    })
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});