require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./src/app");

function connectServer() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("✅ MongoDB connected (day-6 DB)");
    })
    .catch((err) => {
      console.error("❌ DB connection error:", err.message);
    });
}

// start server
const PORT = process.env.PORT || 300;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  connectServer();
});
