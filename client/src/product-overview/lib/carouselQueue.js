export default (photos = [], limit) => {
  let result = [...photos].splice(0, limit)

  result.scrollForward = (i) => {
    //remove first item in result
    result.shift();
    //push photos at i + 1
    result.push(photos[i])
  }

  result.scrollBackward = (i) => {
    //pop last item out of result
    result.pop();
    //add to front of array
    result.unshift(photos[i]);
  }

  return result;
}