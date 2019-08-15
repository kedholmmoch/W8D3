function Student(fName, lName) {
  this.fName = fName;
  this.lName = lName;
  this.courses = [];
}

Student.prototype.name = function () {
  return this.fName + " " + this.lName;
}

Student.prototype.enroll = function (course) {
  if (this.courses.indexOf(course) == -1) {
    this.courses.push(course);
  }

  course.addStudent(this);
}

function Course(name, dept, credit) {
  this.name = name;
  this.dept = dept;
  this.credit = credit;
  this.students = []
}

Course.prototype.addStudent = function (student) {
  if (this.students.indexOf(student) == -1) {
    this.students.push(student);
  }
}