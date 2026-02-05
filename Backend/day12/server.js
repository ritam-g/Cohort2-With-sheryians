const app = require("./src/app");
const connectDB = require("./src/config/databse");
require('dotenv').config()

app.listen(3000,()=>{
    console.log('server is runing ');
    connectDB()
})