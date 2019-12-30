/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var { db } = require("../db");

// console.log(db.getMessages());
module.exports = {
  messages: {
    get: function(callback) {
      db.connect();
      db.query("SELECT * FROM messages", (err, results, field) => {
        if (err) {
          callback(err);
        } else {
          callback(JSON.stringify(results));
        }
      });
      db.on("error", err => console.log(err));
      db.end();
    }, // a function which produces all the messages
    post: function(message) {
      db.connect();
      // console.log(message);
      db.query(
        `INSERT INTO messages(username, message, roomname) values('${message.username}','${message.message}','${message.roomname}')`,
        (err, results, field) => {
          if (err) {
            throw err;
          }
        }
      );
      db.on("error", err => console.log(err));
      db.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {},
    post: function() {}
  }
};
