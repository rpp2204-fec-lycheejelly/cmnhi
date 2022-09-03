export default (photos) => {
  let result = [...photos].splice(0, 7)

  result.addToFront = (index) => {
    result.pop();
    result.shift();
  }

  result.addToBack = (index) => {

  }

  return result;
}