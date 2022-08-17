require('dotenv').config();
const axios = require('axios');

module.exports.getAllProducts = (req, res) => {
  axios.get(`${process.env.API_URL}/products`, { headers: { Authorization: process.env.API_KEY } })
  .then(result => {
    res.json(result.data);
  })
}