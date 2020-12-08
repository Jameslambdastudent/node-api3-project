const express = require('express')
const server = express()
const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')
const { logger } = require('./middleware')

const PORT = 3000

server.use(express.json())
server.use(postRouter)
server.use(userRouter)

server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong, please try again later.",
	})
})

server.listen(PORT, () => console.log(`Server Running Strong`))
