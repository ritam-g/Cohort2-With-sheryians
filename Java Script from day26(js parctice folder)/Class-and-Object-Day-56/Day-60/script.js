//! CALLBACK PRACTICE
//Baby stuf
// function greet(name,callback) {
//     callback(name);
// } 
// greet("name",function (name) {
//     console.log("your name is ",name);
    
// })
//! Level---2 
// function delayPrint(message,delay,callback) {
//     callback(message,delay)
// }
// function print(message,delay) {
//     setTimeout(() => {
//         console.log(message);
        
//     }, delay*1000);
// }
// delayPrint("hello i am ritam maty",1,print)

//! level--3

// function eat(cb) {
//     console.log("i am eating ");
//     cb()
// }
// function study(cb) {
//     console.log("i am studing");
//     cb()
// }
// function play() {
//     console.log("i am playing");
    
// }
// eat(function () {
//     study(function () {
//         play()
//     })
// })

// function alarm(next) {
//     console.log("Alarm: TIK TIK TIK!!!");
//     setTimeout(next, 1000);
// }
// function wakeUp(next) {
//     console.log("Uth gaya bhai… bas 5 min aur");
//     setTimeout(next, 1500);
// }
// function brush(next) {
//     console.log("Brush kar liya");
//     setTimeout(next, 1000);
// }
// function bath(next) {
//     console.log("Nahaa liya, fresh ho gaya");
//     setTimeout(next, 2000);
// }
// function breakfast(next) {
//     console.log("Maa ka nashta kha liya");
//     setTimeout(next, 1500);
// }
// function waerUniform(next) {
//     console.log("Uniform pehen liya");
//     setTimeout(next, 800);
// }
// function catchBus(next) {
//     console.log("Bus pakad li!");
//     setTimeout(next, 1000);
// }
// function reachSchool() {
//     console.log("School pahunch gaya! Ab class mein neend aayegi");
// }

// // Tera nesting bilkul perfect hai!
// alarm(function () {
//     wakeUp(function () {
//         brush(function () {
//             bath(function () {
//                 breakfast(function () {
//                     waerUniform(function () {
//                         catchBus(function () {
//                             reachSchool();
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

//anther one 

// function add(a,b,cb) {
//     let result=a+b
//     cb(null,result);
    
// }
// function sub(a,b,cb) {
//     let result=a-b
//     cb(null,result);
    
// }
// function mult(a,b,cb) {
//     let result=a*b
//     cb(null,result);
    
// }
// function div(a,b) {
//     if (b==0) {
//         return "0 is not allowd"
//     }
//     let result=a/b
//     console.log(result);
    
    
// }
// add(1,2,function () {
//     sub(1,2,function () {
//         mult(1,2,function () {
//             div(1,0)
//         })
//     })
// })


//! Level-4 

// function alarm(next) {
//     console.log("alarm tik tik ....");
//     setTimeout(() => {
//         next()
//     }, 1000);
    
// } 
// function weakUp(next) {
//     console.log("weakUp----");
//     setTimeout(() => {
//         next()
//     }, 1000);
    
// } 
// function brush(next) {
//     console.log("brush----");
//     setTimeout(() => {
//         next()
//     }, 1000);
    
// } 
// function bath(next) {
//     console.log("bath----");
//     setTimeout(() => {
//         next()
//     }, 1000);
    
// } 
// function breakfast(next) {
//     console.log("breakfast----");
//     setTimeout(() => {
//         next()
//     }, 1000);
    
// } 
// function goToSchool(next) {
//     console.log("goToSchool----");
//     setTimeout(() => {
//         next()
//     }, 1000);
    
// } 

// alarm(function () {
//     weakUp(function () {
//         brush(function () {
//             bath(function () {
//                 breakfast(function () {
//                     goToSchool(function () {
//                         console.log("study properly");
                        
//                     })
//                 })
//             })
//         })
//     })
// })
//! level-5
//  10 + 8 = 18
// 20 - 5 = 15
// 6 × 7 = 42
// 15 ÷ 3 = 5
// Error: Cannot divide by zero!

function add(a,b,next) {
    console.log(`${a} + ${b}`);
    let result=a+b
    next(null,result)
}
function subtract(a,b,next) {
    console.log(`${a} - ${b}`);
    let result=a-b
    next(null,result)
}
function multiply(a,b,next) {
    console.log(`${a} * ${b}`);
    let result=a*b
    next(null,result)
}
function divide(a,b,next) {
    console.log(`${a} / ${b}`);
    
    if (b==0) {
    err='cannot devid by zer'
    next(err,null)
    return 
    }
    let result=a/b
    next(null,result)
}
add(10, 8, function(err, res) {
    if (err) console.log("Error:", err);
    else console.log("10 + 8 =", res);

    subtract(20, 5, function(err, res) {
        if (err) console.log("Error:", err);
        else console.log("20 - 5 =", res);

        multiply(6, 7, function(err, res) {
            if (err) console.log("Error:", err);
            else console.log("6 × 7 =", res);

                divide(10, 0, function(err, res) {
                    if (err) console.log("Error:", err);
                    else console.log("10 ÷ 0 =", res);
                });
            });
        });
    });

console.warn("new peyiramid is comming ")
add(10,20,function (err,res) {
    if (err) {
        console.log(err);
        
    } else {
        console.log(res);
        
    }
    add(30,40,function (err,res) {
        if (err) {
        console.log(err);
        
    } else {
        console.log(res);
        
    }
    divide(10,20,function (err,res) {
        if (err) {
        console.log(err);
        
    } else {
        console.log(res);
        
    }
    divide(10,0,function (err,res) {
        if (err) {
        console.log(err);
        
    } else {
        console.log(res);
        
    }
    })
    })
    })
})
