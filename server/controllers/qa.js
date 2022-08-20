require('dotenv').config();
const axios = require('axios');


let getQAList = () => {
  return axios.get(`${process.env.API_URL}/qa/questions?product_id=71710&page=1`, {headers: {Authorization: process.env.API_KEY}})
  .then(result => {
    console.log('API-result.data', result.data);
    return result.data;
  })
  .catch(error => {
    console.log('error', error);
  })
}

module.exports.getQAList = getQAList;
