"use strict";

const express = require('express');
const router = express.Router();

module.exports = (dbHelper) => {
  router.get('/posts', function (req, res) {
    dbHelper.getAllPosts().then((results) => {
      res.json(results);
    })
  });

  return router;
}