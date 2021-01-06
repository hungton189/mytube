import express from 'express'

import routers from "../routers";
import videoControllers from "../controllers/videoControllers";
import userControllers from "../controllers/userControllers";
import userValidation from "../validation/userValidation"

const globalRouter = express.Router();

globalRouter.get(routers.home,videoControllers.home);
globalRouter.get(routers.login, userControllers.login);
globalRouter.get(routers.join, userControllers.join);
globalRouter.get(routers.search, videoControllers.search);
globalRouter.get(routers.logout, userControllers.logout);

globalRouter.post(routers.join,userValidation.postJoin, userControllers.postJoin,userControllers.postLogin);
globalRouter.post(routers.login,userValidation.postLogin, userControllers.postLogin);

module.exports = globalRouter;