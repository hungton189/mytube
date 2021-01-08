import express from 'express'

import routers from "../routers";
import passport from "passport";
import {login,join,postJoin,postLogin,logout,githubLogin,getMe,facebookLogin} from "../controllers/userControllers";
import {postJoinValidation} from "../validation/userValidation";
import {onlyPrivate,onlyPublic} from "../middleware";
import {home,search} from "../controllers/videoControllers"

const globalRouter = express.Router();

globalRouter.get(routers.home, home);
globalRouter.get("/me", getMe);
globalRouter.get(routers.login,onlyPublic,login);
globalRouter.get(routers.join,onlyPublic,join);
globalRouter.get(routers.search, search);
globalRouter.get(routers.logout,onlyPrivate,logout);

globalRouter.post(routers.join,onlyPublic,postJoinValidation, postJoin,postLogin);
globalRouter.post(routers.login,onlyPublic,postLogin, postLogin);

globalRouter.get('/auth/github',githubLogin);

globalRouter.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res)=>{
    // Successful authentication, redirect home.
    res.redirect('/');
  });



globalRouter.get('/auth/facebook',facebookLogin);

globalRouter.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = globalRouter;