require('dotenv').config({silent: true})
const bcrypt = require("bcrypt");

exports.seed = function (knex, Promise) {
  function insertUser(email, password, name, avatar_url, about) {
    return knex('users').insert({
      email,
      password: bcrypt.hashSync(password, 10),
      name,
      avatar_url,
      about
    }).returning('id');
  }

  return knex('users').del()
    .then(function () {
      return Promise.all([
        insertUser(
          'kenn.garcia@live.ca',
          process.env.PASSWORD,
          'Keneggy',
          'https://i.stack.imgur.com/ZuAmS.jpg',
          null)
      ]);
    });
}