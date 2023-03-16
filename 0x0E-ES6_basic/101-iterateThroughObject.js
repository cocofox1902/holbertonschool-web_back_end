export default function iterateThroughObject(reportWithIterator) {
  let test = '';
  for (const item of reportWithIterator) {
    if (test.length > 0) {
      test += ' | ';
    }
    test += item;
  }
  return test;
}
