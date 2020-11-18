import routers from "./routers"

module.exports.locals = (req, res , next) =>
{
    res.locals.routers = routers;
    next();
}