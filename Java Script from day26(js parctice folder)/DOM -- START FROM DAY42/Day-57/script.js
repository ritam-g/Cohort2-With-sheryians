//! call,apply,bind
//! when ever we want "this" value according to us we use these three options

let obj = {
    UserName: "ritam",
    Adress: "WB"
};

function demo(...arr) {
    console.log(this, arr.toString());
}

//! call()
demo.call(obj, 1, 2, 3, 4, 5);

//! apply()
demo.apply(obj, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

// bind()

//! bind() 
let fun = demo.bind(obj, 1, 2, 34, 5, 567, 6);
fun();
