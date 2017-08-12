'use strict'

const bcrypt = require("bcrypt");

module.exports = (knex) => {
  return {

    getPosts: () => {
      return knex('posts')
        .select()
    },

    getPostsBeauty: () => {
      return knex('posts')
        .select()
        .where('category', 'Beauty')
    },

    getPostsFashion: () => {
      return knex('posts')
        .select()
        .where('category', 'Fashion')
    },

    getPostsTravel: () => {
      return knex('posts')
        .select()
        .where('category', 'Travel')
    },

    getPostsFitness: () => {
      return knex('posts')
        .select()
        .where('category', 'Fitness')
    },

    getAboutMe: () => {
      return knex('users')
        .select()
        .where('name', 'Gabriella Gloria')
    },

    getPost: (id) => {
      return knex('posts')
        .select()
        .where({ id })
    },

    createPost: (data) => {
      return knex('posts')
        .insert({
          title: data.title,
          content: data.content,
          category: data.categories
        })
    },

    deletePost: (id) => {
      return knex('posts')
        .where({ id })
        .del();
    }

  }
};