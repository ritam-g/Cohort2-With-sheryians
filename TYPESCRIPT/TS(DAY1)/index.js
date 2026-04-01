"use strict";
function studentData(stu) {
    console.log(stu.name);
    console.log(stu.age);
    console.log(stu.isGraduated);
    console.log(stu.courses);
    console.log(stu.specialCourse);
}
studentData({
    name: "John Doe",
    age: 22,
    isGraduated: true,
    courses: ["Math", "Science", "History"],
    specialCourse: "Advanced Mathematics"
});
