const usersDb = require('./userDb')



//custom middleware

function validateUserId(req, res, next) {
    return (req, res, next) => {
		users.getById(req.params.id)
			.then((user) => {
				if (user) {
					
					req.user = user
					next()
				} else {
					res.status(404).json({
						message: "User not found",
					})
				}
			})
			.catch((error) => {
				next(error)
			})
	}
  }
  
  function validateUser(req, res, next) {
    return (req, res, next) => {
		if (!req.body.name || !req.body.email) {
			res.status(400).json({
				message: "Missing user name or email",
			})
		} else {
			next()
		}
	}
  }
  
  function validatePost(req, res, next) {
    return (req, res, next) => {
		users.getById(req.params.id)
			.then((user) => {
				if (user) {
					
					req.user = user
					next()
				} else {
					res.status(404).json({
						message: "User not found",
					})
				}
			})
			.catch((error) => {
				next(error)
			})
	}
  }

  module.exports = {
    validateUserId,
    validateUser,
    validatePost

  }