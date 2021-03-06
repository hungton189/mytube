import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import helmet from "helmet";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import mongoStore from "connect-mongo";

import "./passport"

import middleware from "./middleware";
import routers from "./routers"
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";

const app = express()

const cookieStore = mongoStore(session)

app.set('view engine', 'pug')
app.use("/uploads",express.static("uploads"))
app.use("/static",express.static("static"))
app.use(helmet());  //lọc các header độc hại
app.use(morgan("dev")); //log ra các request
app.use(cookieParser("devbjhdbfbdjfb"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave:true,
    saveUninitialized: true,
    store:new cookieStore({mongooseConnection:mongoose.connection})
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(middleware.locals);
app.use(routers.videos,videoRouter);
app.use(routers.home,globalRouter);
app.use(routers.users,userRouter);
app.use("/api",apiRouter);


module.exports = app;