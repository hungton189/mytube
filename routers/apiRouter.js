import express from 'express';
import {registerView} from "../controllers/videoControllers"
import {onlyPublic,onlyPrivate} from "../middleware"

const apiRouter = express.Router();

apiRouter.post("/:id/view",registerView)
module.exports = apiRouter;