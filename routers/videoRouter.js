import express from 'express'

const videoRouter = express.Router();

videoRouter.get("/",(req,res) => {res.send("index of video")})

module.exports = videoRouter;