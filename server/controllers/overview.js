require('dotenv').config();
const axios = require('axios');
const auth_header = { headers: { Authorization: process.env.API_KEY } };

module.exports.getProduct = (req, res) => {
  return axios.get(`${process.env.API_URL}/products/${req.params.product_id}`, auth_header)
  .then(product => {
    return product.data;
  })
}

module.exports.getReviewData = (req, res) => {
  return axios.get(`${process.env.API_URL}/reviews/meta?product_id=${req.params.product_id}`, auth_header)
    .then(reviews => {
      return reviews.data;
    })
}

module.exports.getStyles = (req, res) => {
  return axios.get(`${process.env.API_URL}/products/${req.params.product_id}/styles`, auth_header)
    .then(styles => {
      return styles.data.results;
    })
}