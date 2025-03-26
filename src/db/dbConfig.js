const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected successfully!!");
  } catch (err) {
    console.log("Db connection fails " + err.message);
    process.exit(1);
  }
}

module.exports = main;
