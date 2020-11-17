import express from 'express'

const userRouter = express.Router();

userRouter.get("/",(req,res) => {res.send("index of user")})

module.exports = userRouter;