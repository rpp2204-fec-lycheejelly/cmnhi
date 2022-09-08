require('dotenv').config();
const axios = require('axios');
const auth_header = { headers: { Authorization: process.env.API_KEY } };

module.exports.getProduct = (req, res) => {
  return axios.get(`${process.env.API_URL}/products/${req.params.product_id}`, auth_header)
    .then(product => {
      return product.data;
    })
    .catch(error => {
      console.log(error.message)
    })
}

module.exports.getReviewData = (req, res) => {
  return axios.get(`${process.env.API_URL}/reviews/meta?${req.params.product_id}`, auth_header)
    .then(reviews => {
      return reviews.data;
    })
    .catch(error => {
      console.log(error.message)
    })
}

module.exports.getStyles = (req, res) => {
  return axios.get(`${process.env.API_URL}/products/${req.params.product_id}/styles`, auth_header)
    .then(styles => {
      return styles.data.results;
    })
    .catch(error => {
      console.log(error.message)
    })
}

module.exports.addToCart = (req, res) => {
  return axios.post(`${process.env.API_URL}/cart`, req.body, auth_header)
    .then(result => {
      console.log('Successful POST to cart', req.body)
      res.end();
    })
    .catch(error => {
      console.log(error.message)
    })
}