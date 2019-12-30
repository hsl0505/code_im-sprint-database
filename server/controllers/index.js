/* eslint-disable no-unused-vars */
var models = require("../models");
// models.messages.get(data => console.log(data));

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get(data => res.status(200).send(data));
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      // console.log(req.body);
      models.messages.post(req.body);
      res.status(200).send("ok");
    } // a function which handles posting a message to the database
  },

  users: {
    get: function(req, res) {}, // a function which handles a get request for all users
    post: function(req, res) {} // a function which handles posting a user to the database
  }
};
