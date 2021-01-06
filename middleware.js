import multer from "multer";
import routers from "./routers"

module.exports.locals = (req, res , next) =>
{
    res.locals.routers = routers;
    res.locals.user = req.user || {};
    next();
}

const multerVideo = multer({ dest: 'uploads/Videos/' });
module.exports.uploadVideo = multerVideo.single("videoFile");