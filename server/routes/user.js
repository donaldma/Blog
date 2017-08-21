"use strict";

const express = require('express');
const router  = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

module.exports = (dbHelper) => {

  router.get('/login', (req, res) => {
    res.render('login', {error: null});
  });

  router.post('/login', (req, res) => {
    dbHelper.getUserByEmail(req.body.email)
    .then((result) => {
      if(result.length !== 0) {
        if(bcrypt.compareSync(req.body.password, result[0].password)) {
          req.session.user = {
            id: result[0].id,
            avatar_url: result[0].avatar_url,
            name: result[0].name,
            short_about: result[0].short_about
          }
          res.redirect('/');
        } else {
          res.render('login', {
            error: "Wrong Information"
          });
        }
      } else {
        res.render('login', {
          error: "Wrong information"
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/500");
    });
  });

  router.get('/logout', (req, res) => {
    req.session.user = null;
    res.redirect('back');
  });

  return router;
}