export default (photos = []) => {
  let result = [...photos].splice(0, 7)

  result.addToFront = (i) => {
    result.pop();
    // result.unshift(photos);
  }

  result.addToBack = (i) => {

  }

  return result;
}