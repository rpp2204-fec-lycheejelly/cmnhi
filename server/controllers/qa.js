require('dotenv').config();
const axios = require('axios');
const auth_header = { headers: { Authorization: process.env.API_KEY } };

let getQAList = (req, res) => {
  // return axios.get(`${process.env.API_URL}/qa/questions?product_id=${req.params.product_id}`, {headers: {Authorization: process.env.API_KEY}})
  return axios.get(`${process.env.API_URL}/qa/questions?product_id=${req.params.product_id}`, auth_header)
  .then(result => {
    console.log('API-result.data', result.data);
    return result.data;
  })
  .catch(error => {
    console.log('error', error);
    throw error;
  })
}





module.exports.getQAList = getQAList;
