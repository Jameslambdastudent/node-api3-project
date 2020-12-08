const postDb = require('./postDb')

// custom middleware

function validatePostId(req, res, next) {
    return (req, res, next) => {
		users.getById(req.params.id)
			.then((post) => {
				if (post) {
					// set a value to the request so it can be
					// accessed later in the middleware stack
					req.post = post
					next()
				} else {
					res.status(404).json({
						message: "Post not found",
					})
				}
			})
			.catch((error) => {
				next(error)
			})
	}
  }
  

  module.exports = {
    validatePostId
  }