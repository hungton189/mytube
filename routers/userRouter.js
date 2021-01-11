import {uploadAvatar} from "../middleware"
import express from 'express';
import routers from '../routers';
import {editProfile,changePassword,postChangePassword,postEditProfile,userDetail} from '../controllers/userControllers';
import {onlyPublic,onlyPrivate} from "../middleware"

const userRouter = express.Router();

userRouter.get("/edit-profile",onlyPrivate,editProfile);
userRouter.post("/edit-profile",onlyPrivate,uploadAvatar,postEditProfile);
userRouter.get(routers.changePassword,onlyPrivate,changePassword);
userRouter.post(routers.changePassword,onlyPrivate,postChangePassword);
userRouter.get("/:id",userDetail)

module.exports = userRouter;