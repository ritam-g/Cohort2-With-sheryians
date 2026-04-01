interface STUDENT {
    name: string;
    age: number;
    isGraduated: boolean;
    courses: string[];
    gender?: string; // Optional property
}
interface ScpecialStudent extends STUDENT {
    specialCourse: string;
}
function studentData(stu: ScpecialStudent): void {
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
})