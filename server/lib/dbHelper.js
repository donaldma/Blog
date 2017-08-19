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

    updatePost: (id, data) => {
      return knex('posts')
        .update({
          title: data.title,
          content: data.content,
          category: data.categories
        })
        .where({ id })
    },

    deletePost: (id) => {
      return knex('posts')
        .where({ id })
        .del();
    },

    getUserByEmail: (email) => {
      return knex('users')
        .where({ email })
    },

    getUserById: (id) => {
      return knex('users')
        .where({ id })
    },

    updateProfile: (id, name, email, avatar_url, password, about) => {
      return knex('users')
        .update({
          name,
          email,
          avatar_url,
          password,
          about
        })
        .where({ id })
    }

  }
};