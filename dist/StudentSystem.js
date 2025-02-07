"use strict";
// 🏫 Create a Student Management System where students can be added, marked as passed/failed, and checked for status.
// 1. Create a union literal type called StudentStatus that can be "active", "graduated", or "dropped".
// 2. Create a type alias called Student which contains: studentId (number), name (string), age (number), subjects (string[]), status (StudentStatus).
// 3. Create a function called addStudent which will add a student to the students array. The function needs to return a Student object.
// 4. Create a function called updateStatus which updates a student's status. The return needs to be a string.
// 5. Create a function called addSubject which adds a subject to a student’s subjects array. The return needs to be a string.
// 6. Create a function called getStudent which returns a student’s information based on studentId.
var students = [];
function findStudent(studentId) {
    return students.find(function (student) { return student.studentId === studentId; });
}
function addStudent(newStudent) {
    students.push(newStudent);
    return newStudent;
}
function updateStatus(studentId, status) {
    var student = findStudent(studentId);
    student.status = status;
    return "".concat(student.name, " has ").concat(status);
}
function addSubject(studentId, subject) {
    var student = findStudent(studentId);
    student.subjects.push(subject);
    return "".concat(subject, " added to ").concat(student.name, "'s subjects");
}
function getStudent(studentId) {
    return findStudent(studentId);
}
// Test cases (Create more if needed)
var newStudent = {
    studentId: 1,
    name: "Alice",
    age: 20,
    subjects: ["Math", "Science"],
    status: "active",
};
console.log(addStudent(newStudent)); // { studentId: 1, name: "Alice", age: 20, subjects: ["Math", "Science"], status: "active" }
console.log(updateStatus(1, "graduated")); // "Alice has graduated"
console.log(addSubject(1, "History")); // "History added to Alice's subjects"
console.log(getStudent(1)); // { studentId: 1, name: "Alice", age: 20, subjects: ["Math", "Science", "History"], status: "graduated" }
