/* eslint-disable no-unused-vars */
var models = require("../models");
// models.messages.post({
//   username: "a",
//   message: "b",
//   roomname: "c"
// });

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get((err, data) => res.status(200).send(data));
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      // console.log(req.body);
      let { body } = req;
      // console.log(body);
      models.messages.post(body);
      res.status(200).send("ok");
    } // a function which handles posting a message to the database
  },

  users: {
    get: function(req, res) {
      models.users.get((err, data) => res.status(200).send(data));
    }, // a function which handles a get request for all users
    post: function(req, res) {
      let { body } = req;
      models.users.post(body);
      res.status(200).send("ok");
    } // a function which handles posting a user to the database
  }
};
