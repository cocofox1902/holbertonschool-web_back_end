const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    console.log(`Number of students: ${data.split('\n').length - 1}`);
    const cs = [];
    const swe = [];
    data.split('\n').forEach((line) => {
      if (line.includes('CS')) {
        cs.push(line.split(',')[0]);
      } else if (line.includes('SWE')) {
        swe.push(line.split(',')[0]);
      }
    });
    console.log(
      `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`,
    );
    console.log(
      `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`,
    );
  });
}

module.exports = countStudents;
