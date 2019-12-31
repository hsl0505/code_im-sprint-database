/* eslint-disable no-unused-vars */
var models = require("../models");

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get()
      .then(data => res.status(200).send(data))
      .catch(err => { throw err })
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      let { body } = req;
      models.messages.post(body)
      .then(okSign => res.status(200).send(okSign))
      .catch(err => { throw err });
      
    } // a function which handles posting a message to the database
  },

  users: {
    get: function(req, res) {
      models.users.get()
      .then(data => res.status(200).send(data))
      .catch(err => { throw err })
    }, // a function which handles a get request for all users
    post: function(req, res) {
      let { body } = req;
      models.users.post(body)
      .then(okSign => res.status(200).send(okSign))
      .catch(err => { throw err });
    } // a function which handles posting a user to the database
  }
};
