import express from 'express';
import routers from "../routers";
import videoControllers from "../controllers/videoControllers"

const videoRouter = express.Router();

videoRouter.get("/upload-video",videoControllers.uploadVideo)
videoRouter.post("/upload-video",videoControllers.postUploadVideo)
videoRouter.get(routers.editVideo,videoControllers.editVideo)
videoRouter.get("/:id",videoControllers.videoDetail)
module.exports = videoRouter;