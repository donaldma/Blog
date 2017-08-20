"use strict";

const express = require('express');
const router  = express.Router();
const bcrypt = require("bcrypt");

module.exports = (dbHelper) => {

  router.post('/edit/:id', (req, res) => {
    dbHelper.getUserById(req.params.id)
      .then((result) => {
        let id = req.params.id;
        let name = req.body.name || result[0].name;
        let email = req.body.email || result[0].email;
        let avatar_url = req.body.avatar_url || result[0].avatar_url;
        if(req.body.password) {
          var password = bcrypt.hashSync(req.body.password, 10)
        } else {
          var password = result[0].password;
        }
        let short_about = req.body.short_about || result[0].short_about
        let about = req.body.about || result[0].about;
        dbHelper.updateProfile(id, name, email, avatar_url, password, short_about, about)
          .then(() => {
            req.session.user.name = name;
            req.session.user.email = email;
            req.session.user.avatar_url = avatar_url;
            req.session.user.password = password;
            req.session.user.short_about = short_about;
            req.session.user.about = about;
            res.redirect(`/profile/${id}`)
          })
      })
      .catch((error) => {
        console.log(error);
        res.redirect("/500");
      });
  })

  router.get('/:id', (req, res) => {
    dbHelper.getUserById(req.params.id)
      .then((result) => {
        if(!result[0]) {
          res.redirect('/404');
        }
        res.render('profile', {
          person: result[0]
        });
      })
  })

  return router;
}