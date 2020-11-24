import express from 'express';
import routers from '../routers';
import userControllers from '../controllers/userControllers';

const userRouter = express.Router();

userRouter.get(routers.editProfile,userControllers.editProfile);
userRouter.get(routers.changePassword,userControllers.changePassword);
userRouter.get(routers.userDetail,userControllers.userDetail)

module.exports = userRouter;