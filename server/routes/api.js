"use strict";

const express = require('express');
const router = express.Router();

module.exports = (dbHelper) => {
  router.get('/posts', (req, res) => {
    dbHelper.getPosts().then((results) => {
      res.json(results);
    })
  });

  router.post('/posts', (req, res) => {
    dbHelper.createPost(req.body).then((results) => {
      res.json(results);
    })
  });

  router.get('/posts/:id', (req, res) => {
    dbHelper.getPost(req.params.id).then((results) => {
      res.json(results);
    })
  });

  router.delete('/posts/:id', (req, res) => {
    dbHelper.deletePost(req.params.id).then((result) => {
      res.redirect('/posts');
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/500");
    });
  });

  return router;
}