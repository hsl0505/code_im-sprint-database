/* eslint-disable no-console */
// var mysql = require("mysql");

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".

// let connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "chat"
// });

let Sequelize = require("sequelize");

let sequelize = new Sequelize("chat", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

let Messages = sequelize.define("messages", {
  username: Sequelize.STRING,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});

let Users = sequelize.define("users", {
  username: Sequelize.STRING
});

module.exports = {
  // db: sequelize,
  Messages: Messages,
  Users: Users
};
