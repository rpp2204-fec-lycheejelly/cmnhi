export default (ratings) => {
  let scoreTotal = 0;
  let totalResponses = 0;
  let scores = [];

  for (var key in ratings) {
    scoreTotal += ratings[key] * key;
    totalResponses += parseInt(ratings[key]);
  }

  let average = scoreTotal / totalResponses;
  let rating = Math.round((average * 10)) / 10;

  while(scores.length < 5) {
    if (rating >= 1) {
      scores.push(1);
    } else if (rating < 1 && rating > 0) {
      let piece = Math.floor(rating / 0.25);
      switch (piece) {
        case 3:
          scores.push(0.75);
          break;
        case 2:
          scores.push(0.50);
          break;
        case 1:
          scores.push(0.25);
          break;
        default:
          scores.push(0);
      }
    } else {
      scores.push(0);
    }
    rating--;
  }

  return {totalResponses, scores};
};