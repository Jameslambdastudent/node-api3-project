const express = require('express');
const usersDb = require('./userDb')
const { validateUser, validateUserId, validatePost} = require('./users-middleware')

const router = express.Router();

router.post('/users', validateUser(), (req, res) => {
  users.insert(req.body)
  .then((user) => {
    res.status(201).json(user)
  })
  .catch((error) => {
    next(error)
  })
});

router.post('/users/:id/posts', validateUserId(), (req, res) => {
  if(!req.body.text) {
    return res.status(400).json({message: "Users Not Found"})
  }
  users.insert(req.params.id, req.body)
  .then((user) => {
    res.status(201).json(user)
  })
  .catch((error) => {
    next(error)
  })
});

router.get('/users', validateUser(), (req, res) => {
  users.get(users)
  .then((users) => {
    res.status(201).json(users)
  })
  .catch((error) => {
    next(error)
  })
});

router.get('/users/:id', validateUserId(), (req, res) => {
  res.status(200).json(req.user)
});

router.get('/users/:id/posts', validatePost(), (req, res) => {
  users.getUserPost(req.params.id)
  .then((posts) => {
    res.status(200).json(posts)
  })
  .catch((error) => {
    next(error)
  })
});

router.delete('/users/:id',validateUserId(), (req, res) => {
  users.remove(req.params.id)
  .then((count) => {
    if(count > 0) {
      res.status(200).json({message: "users Remove"})
    }
  })
  .catch((error) => {
    next(error)
  })
});

router.put('/:id', validateUserId(), (req, res) => {
  users.getUserPost(req.params.id, req.body)
  .then((user) => {
    if(user) {
      res.status(200).json(user)
    } else {
      res.status(400).json({message: "Users cant be Found"})
      }
  
  })
  .catch((error) => {
    next(error)
  })

});

module.exports = router;
