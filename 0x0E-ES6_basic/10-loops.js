export default function appendToEachArrayValue(array, appendString) {
  let test = [];
  for (let idx of array) {
    test.push(appendString + idx);
  }

  return test;
}
