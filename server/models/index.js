/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var { Messages, Users } = require("../db");

// module.exports = {
//   messages: {
//     get: function() {
//       return new Promise((res, rej) => {
//         let temp = "SELECT * FROM messages";
//         db.query(temp, (err, results, field) => {
//           if (err) {
//             rej(err);
//           } else {
//             res(JSON.stringify(results));
//           }
//         });
//       })
//     }, // a function which produces all the messages
//     post: function({username, message, roomname}) {
//       return new Promise((res, rej) => {
//         let temp = "insert into messages(username, message, roomname) values(?, ?, ?)";

//         db.query(temp, [username, message, roomname], (err, results, field) => {
//           if (err) {
//             rej(err);
//           } else {
//             res("ok");
//           }
//         });

//       });
//     } // a function which can be used to insert a message into the database
//   },

//   users: {
//     // Ditto as above.
//     get: function() {
//       return new Promise((res, rej) => {
//         let temp = "SELECT * FROM users";
//         db.query(temp, (err, results, field) => {
//           if (err) {
//             rej(err);
//           } else {
//             res(JSON.stringify(results));
//           }
//         });
//       })
//     },
//     post: function(message) {
//       return new Promise((res, rej) => {
//         let temp = `INSERT INTO users(username) values('${message.username}')`;
//         db.query(temp, (err, results, field) => {
//           if (err) {
//             rej(err);
//           } else {
//             res("ok");
//           }
//         });
//       })
//     }
//   }
// };

module.exports = {
  messages: {
    get: function() {
      Messages.sync()
        .then(() => {
          return Messages.findAll();
        })
        .then(data => console.log(data));
    },
    post: function() {}
  },

  users: {
    get: function() {},
    post: function() {}
  }
};
