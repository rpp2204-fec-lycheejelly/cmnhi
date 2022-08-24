export default (ratings) => {
  let scoreTotal = 0;
  let totalResponses = 0;

  for (var key in ratings) {
    scoreTotal += ratings[key] * key;
    totalResponses += parseInt(ratings[key]);
  }

  let average = scoreTotal / totalResponses;
  return Math.round((average * 10)) / 10;
};