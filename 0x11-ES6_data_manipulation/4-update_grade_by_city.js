export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.map((student) => {
    if (student.location === city) {
      const grade = newGrades.filter((item) => item.studentId === student.id);
      if (grade.length > 0) {
        student.grade = grade[0].grade;
      } else {
        student.grade = 'N/A';
      }
    }
    return student;
  });
}
