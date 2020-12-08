const express = require('express');
const postDb = require('./postDb')
const { validatePostId } = require('./post-middleware')

const router = express.Router();

router.get('/posts', validatePostId(), (req, res) => {
  posts.insert(req.body)
  .then((user) => {
    res.status(201).json(user)
  })
  .catch((error) => {
    next(error)
  })
});

router.get('/posts/:id', validatePostId(), (req, res) => {
  res.status(200).json(req.post)
});

router.delete('/posts/:id', validatePostId(), (req, res) => {
  posts.remove(req.params.id)
  .then((count) => {
    if(count > 0) {
      res.status(200).json({message: "users Remove"})
    }
  })
  .catch((error) => {
    next(error)
  })
});

router.put('/posts/:id', validatePostId(), (req, res) => {
  posts.getById(req.params.id, req.body)
  .then((post) => {
    if(post) {
      res.status(200).json(user)
    } else {
      res.status(400).json({message: "Post cant be Found"})
      }
  
  })
  .catch((error) => {
    next(error)
  })
});



module.exports = router;
