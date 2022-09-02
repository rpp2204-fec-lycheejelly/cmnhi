export default (photos) => {
  let result = [...photos].splice(0, 7)

  return result;
}