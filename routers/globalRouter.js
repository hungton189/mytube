import express from 'express'

import routers from "../routers";
import videoControllers from "../controllers/videoControllers";
import userControllers from "../controllers/userControllers";

const globalRouter = express.Router();

globalRouter.get(routers.home,videoControllers.home);
globalRouter.get(routers.login, userControllers.login);
globalRouter.get(routers.join, userControllers.join);
globalRouter.get(routers.search, videoControllers.search);

module.exports = globalRouter;