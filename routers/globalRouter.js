import express from 'express'

import routers from "../routers";
import videoControllers from "../controllers/videoControllers";
import userControllers from "../controllers/userControllers";
import userValidation from "../validation/userValidation";
import {onlyPrivate,onlyPublic} from "../middleware"

const globalRouter = express.Router();

globalRouter.get(routers.home,videoControllers.home);
globalRouter.get(routers.login,onlyPublic,userControllers.login);
globalRouter.get(routers.join,onlyPublic,userControllers.join);
globalRouter.get(routers.search, videoControllers.search);
globalRouter.get(routers.logout,onlyPrivate,userControllers.logout);

globalRouter.post(routers.join,onlyPublic,userValidation.postJoin, userControllers.postJoin,userControllers.postLogin);
globalRouter.post(routers.login,onlyPublic,userValidation.postLogin, userControllers.postLogin);

module.exports = globalRouter;