//global

const HOME = "/";
const JOIN = "/join"
const SEARCH = "/search"
const LOGIN = "/login"
const LOGOUT = "/logout"


//user
const USERS = "/users"
const USER_DETAIL = "/:id"
const EDIT_PROFILE = "/edit-profile"
const CHANGE_PASSWORD = "/change-password"

//video
const VIDEOS = "/videos"
const VIDEO_DETAIL = "/:id"
const EDIT_VIDEO = "/:id/edit-video"
const UPLOAD_VIDEO = "/upload-video"
const DELETE_VIDEO = "/:id/delete-video"

const routers = 
{
    home:HOME,
    join:JOIN,
    logout:LOGOUT,
    login:LOGIN,
    search:SEARCH,
    users:USERS,
    userDetail:USER_DETAIL,
    editProfile:EDIT_PROFILE,
    changePassword:CHANGE_PASSWORD,
    videos:VIDEOS,
    videoDetail:VIDEO_DETAIL,
    editVideo:EDIT_VIDEO,
    uploadVideo:UPLOAD_VIDEO,
    deleteVideo:DELETE_VIDEO
}
module.exports = routers;