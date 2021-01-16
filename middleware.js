import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routers from "./routers";
import dotenv from "dotenv";
dotenv.config();

module.exports.locals = (req, res , next) =>
{
    res.locals.routers = routers;
    res.locals.loggedUser = req.user || null;
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
    console.log("onlyPrivate");
    if(!req.user)
    {
        console.log("No")
        res.redirect("/");
    }
    else
    {
        next();
    }
}

const s3 = new aws.S3({
    accessKeyId:process.env.AWS_KEY,
    secretAccessKey:process.env.AWS_PRIVATE_KEY
});

const multerVideo = multer({
    storage:multerS3({
        s3,
        acl:"public-read",
        bucket:"my-tube/video"
    })
});
module.exports.uploadVideo = multerVideo.single("videoFile");
const multerAvatar = multer({
    storage:multerS3({
        s3,
        acl:"public-read",
        bucket:"my-tube/avatar"
    })
});
module.exports.uploadAvatar = multerAvatar.single("avatar");