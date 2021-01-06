import {uploadVideo} from "../middleware"
import express from 'express';
import routers from "../routers";
import videoControllers from "../controllers/videoControllers"
import {onlyPublic,onlyPrivate} from "../middleware"

const videoRouter = express.Router();

videoRouter.get("/upload-video",onlyPrivate,videoControllers.uploadVideo)
videoRouter.post("/upload-video",onlyPrivate,uploadVideo,videoControllers.postUploadVideo)
videoRouter.get("/:id",videoControllers.videoDetail)
videoRouter.get("/:id/edit",onlyPrivate,videoControllers.editVideo)
videoRouter.post("/:id/edit",onlyPrivate,videoControllers.postEditVideo)
videoRouter.get("/:id/delete",onlyPrivate,videoControllers.deleteVideo)
module.exports = videoRouter;