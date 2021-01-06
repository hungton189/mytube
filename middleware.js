import multer from "multer";
import routers from "./routers"

module.exports.locals = (req, res , next) =>
{
    res.locals.routers = routers;
    res.locals.user = req.user || null;
    next();
}

module.exports.onlyPublic = (req, res, next) =>
{
    if(req.user)
    {
        res.redirect("/");
    }
    else
    {
        next();
    }
}

module.exports.onlyPrivate = (req, res, next) =>
{
    if(!req.user)
    {
        res.redirect("/");
    }
    else
    {
        next();
    }
}
const multerVideo = multer({ dest: 'uploads/Videos/' });
module.exports.uploadVideo = multerVideo.single("videoFile");