require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./src/app");

function connectServer() {
    mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('server is succesfull conected with our db');
        
    })
    .catch(err=>console.log(`some error come ${err}`)
    )
}

// start server
const PORT = process.env.PORT || 300;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  connectServer();
});
