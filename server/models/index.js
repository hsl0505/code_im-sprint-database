/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var { db } = require("../db");

// console.log(db);
module.exports = {
  messages: {
    get: function(callback) {
      // db.connect(err => {
      // if (err) {
      //   throw err;
      // }
      let temp = "SELECT * FROM messages";
      db.query(temp, (err, results, field) => {
        if (err) {
          callback(err, null);
          // db.end();
        } else {
          callback(null, JSON.stringify(results));
          // db.end();
        }
      });
      // });

      // db.on("error", err => console.log(err)); // ???
    }, // a function which produces all the messages
    post: function(message) {
      // db.connect(err => {
      //   if (err) {
      //     throw err;
      //   }
      // console.log(message);
      let a = message.username;
      let b = "";
      if (message.message.includes("'")) {
        b =
          message.message.slice(0, message.message.indexOf("'")) +
          "\\" +
          message.message.slice(message.message.indexOf("'"));
      }
      // console.log(b);
      let c = message.roomname;
      let temp = `insert into messages(username, message, roomname) values('${a}', '${b}', '${c}')`;
      // let temp = "insert into messages(username, message, roomname) values(" + message.username +
      // console.log(temp);
      db.query(temp, (err, results, field) => {
        if (err) {
          console.log(err);
          // db.end();
        }
      });
      // });
      // console.log(message);

      // db.on("error", err => console.log(err)); /// ???
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(callback) {
      // db.connect(err => {
      //   if (err) {
      //     throw err;
      //   }
      let temp = "SELECT * FROM users";
      db.query(temp, (err, results, field) => {
        if (err) {
          callback(err, null);
          // db.end();
        } else {
          callback(null, JSON.stringify(results));
          // db.end();
        }
      });
      // });

      // db.on("error", err => console.log(err)); // ???
    },
    post: function(message) {
      // db.connect(err => {
      //   if (err) {
      //     throw err;
      //   }
      let temp = `INSERT INTO users(username) values('${message.username}')`;
      db.query(temp, (err, results, field) => {
        if (err) {
          console.log(err);
          // db.end();
        }
      });
      // });
      // console.log(message);

      // db.on("error", err => console.log(err)); /// ???
    }
  }
};
