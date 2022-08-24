require('dotenv').config();
const axios = require('axios');

module.exports.getProduct = (req, res) => {
  axios.get(`${process.env.API_URL}/products/${req.params.product_id}`, { headers: { Authorization: process.env.API_KEY } })
  .then(product => {
    res.json(product.data);
  })
}

module.exports.getReviewData = (req, res) => {
  axios.get(`${process.env.API_URL}/reviews/meta?product_id=${req.params.product_id}`, { headers: { Authorization: process.env.API_KEY } })
    .then(reviews => {
      res.json(reviews.data);
    })
}