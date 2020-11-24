import express from 'express';
import routers from "../routers";
import videoControllers from "../controllers/videoControllers"

const videoRouter = express.Router();

videoRouter.get(routers.uploadVideo,videoControllers.uploadVideo)
videoRouter.get(routers.editVideo,videoControllers.editVideo)

module.exports = videoRouter;