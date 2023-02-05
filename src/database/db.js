const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const connectDatabase = () => {
  console.log("Wait connecting to the databse");

  mongoose
    .connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.mfuhnkh.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
