// login logout join /users
import User from "../models/User";
import passport from "passport";

module.exports.login = (req,res) => 
{
    res.render('users/login',
    {
        pageTitle:"Login"
    });
}

module.exports.logout = (req,res) => 
{
    req.session.destroy(()=>{res.redirect("/");});
}

module.exports.join = (req,res) => 
{
    res.render('users/join',
    {
        pageTitle:"Join"
    });
}

module.exports.changePassword = (req,res) => 
{
    res.render('users/changePassword',
    {
        pageTitle:"Change Password"
    });
}

module.exports.userDetail = (req,res) => 
{
    const userId = req.params.id;
    res.render('users/userDetail',
    {
        pageTitle:"Profile",
        userId
    });
}

module.exports.editProfile = (req,res) => 
{
    res.render('users/editProfile',
    {
        pageTitle:"Edit Profile"
    });
}

module.exports.postJoin = async (req,res,next) => 
{
    const {body:{name, email, password,password2}} = req;
    if(password !== password2)
    {
        res.status(400);
        res.render('users/join',
        {
            pageTitle:"Join"
        });
    }
    else
    {
        try 
        {
            const user = await User({name,email});
            await User.register(user,password);
            next();
        } 
        catch (error) 
        {
            res.render('users/join',
            {
                pageTitle:"Join",
                error:["Email đã tồn tại"]
            });
        }
    }
}

module.exports.postLogin = passport.authenticate('local', { 
                                    successRedirect: '/',
                                    failureRedirect: '/login'
                                })
module.exports.githubLoginCallback = async(accessToken, refreshToken, profile, cb)=> {
    const {_json:{id,avatar_url,name,email}} = profile;
    try {
        const user = await User.findOne({email: email});
        if(user)
        {
            user.githubId = id;
            user.save();
            const {avatarUrl} = user;
            if(!avatarUrl)
            {
                user.avatarUrl = avatar_url;
                user.save();
            }
            return cb(null, user);
        }
        else
        {
            const newUser = await User.create({
                name,
                email,
                avatarUrl: avatar_url,
                githubId: id
            })
            return cb(null, newUser);
        }
    } catch (error) {
        return cb(error);
    }
}

module.exports.githubLogin = passport.authenticate('github');