require('dotenv').config();
const axios = require('axios');
const auth_header = { headers: { Authorization: process.env.API_KEY } };

let getRelated = (req, res) => {
  return axios.get(`${process.env.API_URL}/products/${req.params.product_id}/related`, auth_header)
    .then((results) => {
      return results.data;
    })
}

module.exports = getRelated;