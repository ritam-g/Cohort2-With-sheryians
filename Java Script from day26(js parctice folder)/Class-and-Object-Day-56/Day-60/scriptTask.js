//! TASK 1 
// function afterDelay(time,cb) {
//     setTimeout(() => {
//         cb()
//     }, time);
// }
// function call() {
//     console.log("hello world");
    
// }
// afterDelay(3000,call)
//! task-2 
// function getUser(userName,cb) {
//     user={
//     username:"ritam",
//     group:"bca",
//     userId:123
//     }
//     setTimeout(() => {
//         cb(user,function (id,cb) {
//             setTimeout(function() {
//                 cb(["hellow","hi","by"])
//             }, 1000);
            
//         })
//     }, 1000);
// }
// getUser("ritam",(user,cb)=>{
//     console.log(user);
//     cb(user.userId,function (arr) {
//         console.log(arr);
        
//     })
        
    
    
// })
//! task 3

function loginuser(cb) {
    console.log("user login methode ");
    setTimeout(() => {
        
    cb({userName:"ritam",age:21,id:2})
    }, 1000);
}
function fetchPermissions(userId,cb) {
    console.log("this is fetchPermissions",userId);
    arr=["h","w","KeyboardEvent"]
    setTimeout(() => {
    
        cb(arr)
    }, 1000);
    
}
loginuser(function (obj) {
    
    fetchPermissions(obj.id,function (arr) {
        console.log("loasing dash borae");
        console.log(arr);
        
        
    })
})