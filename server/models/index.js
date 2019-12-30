/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var { db } = require("../db");

// console.log(db.getMessages());
module.exports = {
  messages: {
    get: async function(callback) {
      // await db.connect();
      await db.query("SELECT * FROM messages", (err, results, field) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, JSON.stringify(results));
        }
      });
      // db.on("error", err => console.log(err)); // ???
      await db.end();
    }, // a function which produces all the messages
    post: async function(message) {
      // await db.connect();
      // console.log(message);
      await db.query(
        `INSERT INTO messages(username, message, roomname) values('${message.username}','${message.message}','${message.roomname}')`,
        (err, results, field) => {
          if (err) {
            throw err;
          }
        }
      );
      // db.on("error", err => console.log(err)); /// ???
      await db.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: async function(callback) {
      // await db.connect();
      await db.query("SELECT * FROM users", (err, results, field) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, JSON.stringify(results));
        }
      });
      // db.on("error", err => console.log(err)); // ???
      await db.end();
    },
    post: async function(message) {
      // await db.connect();
      // console.log(message);
      await db.query(
        `INSERT INTO users(username) values('${message.username}')`,
        (err, results, field) => {
          if (err) {
            throw err;
          }
        }
      );
      // db.on("error", err => console.log(err)); /// ???
      await db.end();
    }
  }
};
