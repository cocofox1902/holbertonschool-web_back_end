export default function createIteratorObject(report) {
  const test = [];
  for (const item of Object.values(report.allEmployees)) {
    test = [...test, ...item];
  }
  return test;
}
