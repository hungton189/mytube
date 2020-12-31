import express from 'express';
import routers from '../routers';
import userControllers from '../controllers/userControllers';

const userRouter = express.Router();

userRouter.get("/edit-profile",userControllers.editProfile);
userRouter.get(routers.changePassword,userControllers.changePassword);
userRouter.get("/:id",userControllers.userDetail)

module.exports = userRouter;