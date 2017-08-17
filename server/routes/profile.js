"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (dbHelper) => {

  router.get('/:id', (req, res) => {
    dbHelper.getUserById(req.params.id)
      .then((result) => {
        res.render('profile', {
          user: result[0]
        });
      })
  })

  return router;
}