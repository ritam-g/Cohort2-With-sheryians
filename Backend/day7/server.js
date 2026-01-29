const app = require("./src/app");
require("dotenv").config();
const connectDB = require('./src/config/database');
app.listen(3000,()=>{
    console.log('server is ruunning ');
    connectDB()
})