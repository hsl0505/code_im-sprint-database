/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var { db } = require("../db");

module.exports = {
  messages: {
    get: function(callback) {
      let temp = "SELECT * FROM messages";
      db.query(temp, (err, results, field) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, JSON.stringify(results));
        }
      });
    }, // a function which produces all the messages
    post: function(message) {
      let a = message.username;
      let b = message.message;
      // if (message.message.includes("'")) {
      //   b =
      //     message.message.slice(0, message.message.indexOf("'")) +
      //     "'" +
      //     message.message.slice(message.message.indexOf("'"));
      // } else {
      //   b = message.message;
      // }

      let c = message.roomname;

      let temp =
        "insert into messages(username, message, roomname) values(?, ?, ?)";

      db.query(temp, [a, b, c], (err, results, field) => {
        if (err) {
          console.log(err);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(callback) {
      let temp = "SELECT * FROM users";
      db.query(temp, (err, results, field) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, JSON.stringify(results));
        }
      });
    },
    post: function(message) {
      let temp = `INSERT INTO users(username) values('${message.username}')`;
      db.query(temp, (err, results, field) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
};
