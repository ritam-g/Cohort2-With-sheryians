// array 


// const arr:number[] = [1,2,3,4,5]

// arr.push(6)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.unshift(0)
// console.log(arr)

// arr.shift()
// console.log(arr)


// tuple its a fixed length array with different types of data

// const tuple:[number,string,boolean]=[1,"hello",true]

// console.log(tuple)

// const tl:[string,number]=["?",10]
// console.log(tl)


// funciton practice

type user={name:string,age:number}

// structure of the funtion 
//NOTE : void means the function does not return anything
// function call(details:user):void {}
// details is the parameter of the function and its type is user which we defined above
function call(details:user):void {
    console.log(`my name is ${details.name} and my age is ${details.age}`)
}

type student={name:string,age:number,grade:string}
function call2({name,age,grade}:student):number {
    console.log(`my name is ${name}, age is ${age}, and grade is ${grade}`)
    return age;
}
call({name:"king",age:22})
console.log(call2({name:"king",age:22,grade:"A"}))