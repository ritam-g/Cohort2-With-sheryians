interface STUDENT {
    name: string;
    age: number;
    isGraduated: boolean;
    courses: string[];
    gender?: string; // Optional property
}

function studentData(stu: STUDENT): void {
    console.log(stu.name);
    console.log(stu.age);
    console.log(stu.isGraduated);
    console.log(stu.courses);

}


studentData({
    name: "John Doe",
    age: 22,
    isGraduated: true,
    courses: ["Math", "Science", "History"]
})