// home search /videos
import {videos} from "../db";
module.exports.home = (req,res) => 
{
    res.render('videos/home',
    {
        pageTitle: 'Home',
        videos
    });
}

module.exports.search = (req,res) => 
{
    const {query: {search}}  = req;
    res.render('videos/search',
    {
        pageTitle: 'Search',
        search,
        videos
    });
}

module.exports.uploadVideo = (req,res) => 
{
    res.render('videos/uploadVideo',
    {
        pageTitle: 'Upload'
    });
}

module.exports.postUploadVideo = (req,res) => 
{
    //add video to database
    res.redirect("/videos/12354523");   //redirect to new video detail
}

module.exports.editVideo = (req,res) => 
{
    res.render('videos/editVideo',
    {
        pageTitle: 'Edit'
    });
}

module.exports.videoDetail = (req,res) => 
{
    const videoId = req.params.id;
    res.render('videos/videoDetail',
    {
        pageTitle: 'Video Detail',
        videoId
    });
}

