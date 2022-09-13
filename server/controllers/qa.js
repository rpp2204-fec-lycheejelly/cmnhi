require('dotenv').config();
const axios = require('axios');
const auth_header = {
  headers: { Authorization: process.env.API_KEY,
             'Content-Type': 'application/json'
  }
};

let getQAList = (req, res) => {
  // return axios.get(`${process.env.API_URL}/qa/questions?product_id=${req.params.product_id}`, {headers: {Authorization: process.env.API_KEY}})
  return axios.get(`${process.env.API_URL}/qa/questions?product_id=${req.params.product_id}&count=200`, auth_header)
  .then(result => {
    // console.log('API-result.data', result.data);
    return result.data;
  })
  .catch(error => {
    console.log('error', error);
    throw error;
  })
}

let addQuestion = (req, res) => {
  // console.log('addQuestion req.body', req.body);
  // console.log('addQuestion req.product_id', req.product_id);
  // return axios.post(`${process.env.API_URL}/qa/questions?product_id=${req.product_id}`, req, auth_header)
  return axios.post(`${process.env.API_URL}/qa/questions`, req.body, auth_header)
  .then(() => {
    console.log('Successfully POST to qa/questions');
    // return;
  })
  .catch(error => {
    console.log('error of addQuestion', error);
    return error;
  })
}


let addAnswer = (req, res) => {
  // console.log('addQuestion req.body', req.body);
  // console.log('addQuestion req', req);
  // console.log('addQuestion req.params', req.params);
  // console.log('addQuestion req.params.question_id', req.params.question_id);
  return axios.post(`${process.env.API_URL}/qa/questions/${req.body.question_id}/answers`, req.body, auth_header)
  .then(() => {
    console.log('Successfully POST to qa/questions/question_id/answers');
  })
  .catch(error => {
    console.log('error of addAnswer', error);
  })

}

let putQuestionHelpful = (req, res) => {
  return axios.put(`${process.env.API_URL}/qa/questions/${req.body.question_id}/helpful`, req.body, auth_header)
  .then(() => {
    console.log('Successfully PUT to qa/questions/question_id/helpful');
  })
  .catch(error => {
    console.log('error of putQuestionHelpful', error);
  })
}




// module.exports.getQAList = getQAList;
// module.exports.addQuestion = addQuestion;
// module.exports.addAnswer = addAnswer;
module.exports = {
  getQAList,
  addQuestion,
  addAnswer,
  putQuestionHelpful,
}