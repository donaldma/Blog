'use strict'

const bcrypt = require("bcrypt");

module.exports = (knex) => {
  return {

    getAllPosts: () => {
      return knex.table('posts')
        .select();
    }

  }
};