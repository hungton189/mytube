import routers from "./routers"

module.exports.locals = (req, res , next) =>
{
    res.locals.routers = routers;
    if(req.signedCookies.userId)
    {
        res.locals.user = {
            isAuthenticated : true,
            userId : req.signedCookies.userId
        }
    }
    else
    {
        res.locals.user = {
            isAuthenticated : false
        }
    }
    next();
}