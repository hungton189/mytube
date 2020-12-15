import {uploadVideo} from "../middleware"
import express from 'express';
import routers from "../routers";
import videoControllers from "../controllers/videoControllers"

const videoRouter = express.Router();

videoRouter.get("/upload-video",videoControllers.uploadVideo)
videoRouter.post("/upload-video",uploadVideo,videoControllers.postUploadVideo)
videoRouter.get("/:id",videoControllers.videoDetail)
videoRouter.get("/:id/edit",videoControllers.editVideo)
videoRouter.post("/:id/edit",videoControllers.postEditVideo)
videoRouter.get("/:id/delete",videoControllers.deleteVideo)
module.exports = videoRouter;