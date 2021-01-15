// home search /videos
import Video from "../models/Video"
module.exports.home = async(req,res) => 
{
    try 
    {
        const videos = await Video.find({});
        res.render('videos/home',{pageTitle: 'Home',videos});
    }
    catch (error) 
    {
        console.log(error);
        res.render('videos/home',{pageTitle: 'Home',videos:[]});
    }
}

module.exports.search = async(req,res) => 
{
    const {query: {search}}  = req;
    let videos = [];
    try {
        videos = await Video.find({title:{$regex:search,$options:"i"}});
    } catch (error) {
        console.log(error);
    }
    res.render('videos/search',
    {
        pageTitle: 'Search',
        search,
        videos
    });
}

module.exports.uploadVideo = (req,res) => 
{
    console.log(req.body)
    res.render('videos/uploadVideo',
    {
        pageTitle: 'Upload'
    });
}

module.exports.postUploadVideo = async (req, res) =>  
{
    const   {
                body:{title,description},
                file:{destination,filename}
            } = req;
    const newVideo = await Video.create({
        fileUrl: destination+filename,
        title,
        description,
        creator:req.user._id,
    });
    console.log("newVideo:"+newVideo);
    res.redirect("/videos/"+newVideo.id);   //redirect to new video detail
}

module.exports.editVideo = async(req,res) => 
{
    const {params:{id}} = req;
    try {
        const video = await Video.findById(id);
        if(video.creator == req.user._id) 
        {
            res.render('videos/editVideo',
            {
                pageTitle: 'Edit Video',
                video
            });
        }
        else
        {
            res.redirect("/")
        }
    }
    catch(err) {
        console.error(err);
        res.redirect("/")
    }
}

module.exports.postEditVideo = async(req, res, next) => 
{
    const { params:{id},body:{title,description}} = req;
    try {
        await Video.findByIdAndUpdate({_id:id},{title,description});

        res.redirect(`/videos/${id}`)
    } catch (error) {
        res.redirect("/");        
    }

}

module.exports.videoDetail = async(req,res) => 
{
    const videoId = req.params.id;
    const video = await Video.findById(videoId).populate("creator");
    try {
        res.render('videos/videoDetail',
    {
        pageTitle: 'Video Detail',
        video
    });
    } catch (error) {
        res.render('videos/videoDetail',
        {
            error: "Không tìm thấy video",
        })
    }
}

module.exports.deleteVideo = async(req,res) =>
{
    const { params:{id} } = req;
    try {
        const video = await Video.findById(id);
        if(video.creator != req.user._id) 
        {
            throw Error();
        }
        else
        {
            await Video.findOneAndRemove({_id:id});
        }
    } catch (error) {
        
    }
    res.redirect("/");
} 


module.exports.registerView = async(req,res)=>
{
    const { params:{id} } = req;
    console.log("thêm view");
    try {
        const video = await Video.findById(id);
        video.views +=1;
        video.save();
        res.status(200);
    } catch (error) {
        res.status(400);
    }
    finally
    {
        res.end();
    }
}

