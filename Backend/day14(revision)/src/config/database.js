const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log('db conected');
    }).catch(err=>{console.log(err)
    })
}
module.exports=connectDB