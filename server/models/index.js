/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var { Messages, Users } = require("../db");

module.exports = {
  messages: {
    get: function() {
      return Messages.sync()
        .then(() => {
          return Messages.findAll();
        })
    },
    post: function(body) {
      return Messages.sync()
        .then(() => {
          return Messages.create(body);
        })
        .then(() => "ok")
    }
  },

  users: {
    get: function() {
      return Users.sync()
        .then(() => {
          return Users.findAll();
        })
    },
    post: function(body) {
      return Users.sync()
        .then(() => {
          return Users.create(body);
        })
        .then(() => "ok")
    }
  }
};
