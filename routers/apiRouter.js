import express from 'express';
import {registerView,addComment} from "../controllers/videoControllers"
import {onlyPublic,onlyPrivate} from "../middleware"

const apiRouter = express.Router();

apiRouter.post("/:id/view",registerView)
apiRouter.post("/:id/addComment",addComment)
module.exports = apiRouter;