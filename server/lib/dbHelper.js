'use strict'

const bcrypt = require("bcrypt");

module.exports = (knex) => {
  return {

    getPosts: () => {
      return knex.table('posts')
        .select()
    },

    getPost: (id) => {
      return knex.table('posts')
        .select()
        .where({ id })
    },

    createPost: (content) => {
      return knex.table('posts')
        .insert({
          title: content.title,
          content: content.content
        })
    },

    deletePost: (id) => {
      return knex.table('posts')
        .where({ id })
        .del();
    }

  }
};