"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (dbHelper) => {

  router.get('/:id', (req, res) => {
    res.render('profile');
  })

  return router;
}