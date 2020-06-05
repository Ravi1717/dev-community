const mongoose = require("mongoose");
const chalk = require("chalk");

const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(chalk.bgMagenta("MongoDB Connected"));
  } catch (err) {
    console.log(chalk.red(err.message));

    //exit process with failure
    process.exit(1);
  }
};
module.exports = connectDB;
