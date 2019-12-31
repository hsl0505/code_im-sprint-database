/* eslint-disable no-unused-vars */
var models = require("../models");

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get((err, data) => res.status(200).send(data));
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      let { body } = req;
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
