'use strict'

const bcrypt = require("bcrypt");

module.exports = (knex) => {
  return {

    getPosts: () => {
      return knex('posts')
        .select()
    },

    getRandomPosts: () => {
      return knex.raw(`SELECT * FROM posts
        ORDER BY RANDOM()
        LIMIT 3`);
    },

    getMostRecent: () => {
      return knex('posts')
        .select()
        .orderBy('created_at', 'desc')
        .limit(2);
    },

    getPostsBeauty: (limit) => {
      return knex('posts')
        .select()
        .where('category', 'Beauty')
        .orderBy('created_at', 'desc')
        .limit(limit)
    },

    getPostsFashion: (limit) => {
      return knex('posts')
        .select()
        .where('category', 'Fashion')
        .orderBy('created_at', 'desc')
        .limit(limit)
    },

    getPostsTravel: (limit) => {
      return knex('posts')
        .select()
        .where('category', 'Travel')
        .orderBy('created_at', 'desc')
        .limit(limit)
    },

    getPostsFitness: (limit) => {
      return knex('posts')
        .select()
        .where('category', 'Fitness')
        .orderBy('created_at', 'desc')
        .limit(limit)
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

    createPost: (data, session) => {
      return knex('posts')
        .insert({
          title: data.title,
          content: data.content,
          category: data.categories,
          photo_url: data.photo,
          user_id: session.user.id
        })
    },

    updatePost: (id, data) => {
      return knex('posts')
        .update({
          title: data.title,
          content: data.content,
          category: data.categories,
          photo_url: data.photo
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

    updateProfile: (id, name, email, avatar_url, password, short_about, about) => {
      return knex('users')
        .update({
          name,
          email,
          avatar_url,
          password,
          short_about,
          about
        })
        .where({ id })
    },

    joinUserPost: () => {
      return knex.select('users.id', 'users.avatar_url', 'users.short_about')
        .from('users')
        .innerJoin('posts', 'users.id', 'posts.user_id')
    }

  }
};