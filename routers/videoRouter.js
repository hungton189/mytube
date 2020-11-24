import express from 'express';
import routers from "../routers";
import videoControllers from "../controllers/videoControllers"

const videoRouter = express.Router();

videoRouter.get(routers.uploadVideo,videoControllers.uploadVideo)
videoRouter.get(routers.editVideo,videoControllers.editVideo)
videoRouter.get("/:id",videoControllers.videoDetail)
videoRouter.get("/upload-video",(req,res) => {console.log("abcfdfbjsa")})

module.exports = videoRouter;