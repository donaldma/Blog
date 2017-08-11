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

    createPost: (data) => {
      return knex.table('posts')
        .insert({
          title: data.title,
          content: data.content,
          category: data.categories
        })
    },

    deletePost: (id) => {
      return knex.table('posts')
        .where({ id })
        .del();
    }

  }
};