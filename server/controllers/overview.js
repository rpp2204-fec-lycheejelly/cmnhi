require('dotenv').config();
const axios = require('axios');
const auth_header = { headers: { Authorization: process.env.API_KEY,
                                'Content-Type': 'application/json' } };

module.exports.getAllProductData = (req, res) => {
  let productData = {};

  let productReq = axios.get(`${process.env.API_URL}/products/${req.params.product_id}`, auth_header);
  let reviewsReq = axios.get(`${process.env.API_URL}/reviews/meta?product_id=${req.params.product_id}`, auth_header);
  let stylesReq = axios.get(`${process.env.API_URL}/products/${req.params.product_id}/styles`, auth_header);
  let relatedReq = axios.get(`${process.env.API_URL}/products/${req.params.product_id}/related`, auth_header);

  axios.all([productReq, reviewsReq, stylesReq, relatedReq])
    .then(axios.spread((...response) => {
      console.log('Product', response[0].data);
      console.log('Reviews', response[1].data.ratings);
      console.log('Styles', response[2].data.results);
      console.log('Related IDs', response[3].data);

      productData = {...response[0].data};

      if (response[1].data.ratings === undefined) {
        productData = {...productData, 'ratings': {'1': '0'}};
      } else {
        productData = {...productData, 'ratings': {...response[1].data.ratings}}
      }

      productData.styles=response[2].data.results;

      res.json(productData);
    }))
    .catch(error => {
      console.log('Error', error.message)
    })
}

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
  return axios.get(`${process.env.API_URL}/reviews/meta?product_id=${req.params.product_id}`, auth_header)
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

module.exports.addInteraction = (req, res) => {
  return axios.post(`${process.env.API_URL}/interactions`, req.body, auth_header)
    .then(result => {
      console.log('Successful POST to interactions', req.body)
      res.end();
    })
    .catch(error => {
      console.log('Error POST to interactions', error.message)
    })
}