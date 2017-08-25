"use strict";

const express = require('express');
const router = express.Router();

module.exports = (dbHelper) => {
  router.get('/posts', (req, res) => {
    dbHelper.getPosts().then((results) => {
      res.json(results);
    })
  });

  router.get('/posts/random', (req, res) => {
    dbHelper.getRandomPosts().then((results) => {
      res.json(results);
    })
  });

  router.get('/posts/recent', (req, res) => {
    dbHelper.getMostRecent().then((results) => {
      res.json(results);
    })
  });

  router.get('/beauty', (req, res) => {
    dbHelper.getPostsBeauty(req.query.limit).then((results) => {
      res.json(results);
    })
  });

  router.get('/fashion', (req, res) => {
    dbHelper.getPostsFashion(req.query.limit).then((results) => {
      res.json(results);
    })
  });

  router.get('/travel', (req, res) => {
    dbHelper.getPostsTravel(req.query.limit).then((results) => {
      res.json(results);
    })
  });

  router.get('/fitness', (req, res) => {
    dbHelper.getPostsFitness(req.query.limit).then((results) => {
      res.json(results);
    })
  });

  router.get('/about', (req, res) => {
    dbHelper.getAboutMe().then((results) => {
      res.json(results);
    })
  });

  router.post('/posts', (req, res) => {
    dbHelper.createPost(req.body, req.session).then((results) => {
      res.json(results);
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/500");
    });
  });

  router.post('/posts/:id/edit', (req, res) => {
    dbHelper.updatePost(req.params.id, req.body).then((results) => {
      res.json(results);
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/500");
    });
  });

  router.get('/posts/:id', (req, res) => {
    dbHelper.getPost(req.params.id).then((results) => {
      res.json(results);
    })
  });

  router.delete('/posts/:id', (req, res) => {
    dbHelper.deletePost(req.params.id).then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/500");
    });
  });

  router.get("/user", (req, res) => {
    const user = req.session.user ? {
      id: req.session.user.id,
      name: req.session.user.name,
      avatar_url: req.session.user.avatar_url,
      short_about: req.session.user.short_about,
    } : null;
    res.json(user);
  });

  router.get("/sidebar", (req, res) => {
    dbHelper.joinUserPost().then((results) => {
      res.json(results);
    });
  });

  return router;
}