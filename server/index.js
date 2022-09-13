require('dotenv').config();
const path = require('path');
const express = require('express');
const axios = require('axios');
const overview = require('./controllers/overview.js');
const {getQAList, addQuestion, addAnswer, putQuestionHelpful} = require('./controllers/qa.js');
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
      let ratings;
      if (reviews === undefined) {
        ratings = {'1': '0'};
      } else {
        // console.log('review ratings', )
        ratings = reviews.ratings;
      }
      productData = {...productData, 'ratings': {...ratings}}
      return overview.getStyles(req, res);
    })
    .then(styleData => {
      productData.styles = styleData;
      res.json(productData);
    })
})

app.post('/cart', (req, res) => {
  overview.addToCart(req, res);
})


//Question and Answer Routes
app.get('/qa/questions/:product_id', (req, res) => {
  return getQAList(req, res)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  })
})

// app.post('/qa/questions/:product_id', (req, res) => {
app.post('/qa/questions', (req, res) => {
  // var requestBody = req.body;
  // console.log('connection is from the client', requestBody);
  return addQuestion(req, res)
  .then(result => {
    // console.log('app.post result', result);
    res.status(201).send('post question success');
  })
  .catch(error => {
    res.send(error);
  })
})


app.post(`/qa/questions/:question_id/answers`, (req, res) => {
  // var requestBody = req.body;
  // console.log('connection is from the client', requestBody); // works

  return addAnswer(req, res)
  .then(result => {
    res.status(201).send('post answer success');
  })
  .catch(error => {
    res.send(error);
  })
})

app.put(`/qa/questions/:question_id/helpful`, (req, res) => {
  console.log('req.body', req.body, 'req.body.question_id', req.body.question_id);
  return putQuestionHelpful(req, res)
  .then(result => {
    res.status(204).send('put helpfulness success');
  })
  .catch(error => {
    res.send(error);
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

app.get('/*', (req, res) => {

});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

//Wildcard

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'))
})