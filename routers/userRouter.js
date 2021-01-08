import express from 'express';
import routers from '../routers';
import userControllers from '../controllers/userControllers';
import {onlyPublic,onlyPrivate} from "../middleware"

const userRouter = express.Router();

userRouter.get("/edit-profile",onlyPrivate,userControllers.editProfile);
userRouter.get(routers.changePassword,onlyPrivate,userControllers.changePassword);
userRouter.get("/:id",userControllers.userDetail)

module.exports = userRouter;