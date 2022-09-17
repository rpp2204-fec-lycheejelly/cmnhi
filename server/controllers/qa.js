require('dotenv').config();
const axios = require('axios');
const auth_header = {
  headers: { Authorization: process.env.API_KEY}
};

let getQAList = (req, res) => {
  // return axios.get(`${process.env.API_URL}/qa/questions?product_id=${req.params.product_id}`, {headers: {Authorization: process.env.API_KEY}})
  return axios.get(`${process.env.API_URL}/qa/questions?product_id=${req.params.product_id}&count=20`, auth_header)
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


let putAnswerHelpful = (req, res) => {
  return axios.put(`${process.env.API_URL}/qa/answers/${req.body.answer_id}/helpful`, req.body, auth_header)
  .then(() => {
    console.log('Successfully PUT to qa/answers/answer_id/helpful');
  })
  .catch(err => {
    console.log('error of putAnswerHelpful', err);
  })
}


let putQuestionReported = (req, res) => {
  return axios.put(`${process.env.API_URL}/qa/questions/${req.body.question_id}/report`, req.body, auth_header)
  .then(() => {
    console.log('Successfully PUT to qa/questions/question_id/helpful');
  })
  .catch(err => {
    console.log('error of putQuestionReport', err);
  })
}


let putAnswerReported = (req, res) => {
  return axios.put(`${process.env.API_URL}/qa/answers/${req.body.answer_id}/report`, req.body, auth_header)
  .then(() => {
    console.log('Successfully REPORT PUT to qa/answers/answer_id/helpful');
  })
  .catch(err => {
    console.log('error of putAnswerReported', err);
  })
}



module.exports = {
  getQAList,
  addQuestion,
  addAnswer,
  putQuestionHelpful,
  putAnswerHelpful,
  putQuestionReported,
  putAnswerReported
}