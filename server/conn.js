const mongoose = require("mongoose");

const db =
  "mongodb+srv://gauravteli:gauravteli@cluster0.iykzyey.mongodb.net/yojna?retryWrites=true&w=majority";
const connectionparams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(db, connectionparams)
  .then(() => {
    console.log(" Database Connetion Successfull .");
  })
  .catch((err) => {
    console.log(err);
  });
