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

module.exports.getMe = (req,res) => 
{
    res.render('users/userDetail',
    {
        pageTitle:"Profile",
        userProfile:req.user
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
module.exports.facebookLoginCallback = async(accessToken, refreshToken, profile, cb)=> 
{
    const {_json:{id,name,email}} = profile;
    try {
        const user = await User.findOne({email: email});
        console.log(user);
        if(user)
        {
            user.facebookId = id;
            user.save();
            const {avatarUrl} = user;
            if(!avatarUrl)
            {
                user.avatarUrl = `https://graph.facebook.com/${id}/picture?type=large`;
                user.save();
            }
            return cb(null, user);
        }
        else
        {
            const newUser = await User.create({
                name,
                email,
                avatarUrl: `https://graph.facebook.com/${id}/picture?type=large`,
                facebookId: id
            })
            return cb(null, newUser);
        }
    } catch (error) {
        return cb(error);
    }
} 

module.exports.githubLogin = passport.authenticate('github');
module.exports.facebookLogin = passport.authenticate('facebook');

module.exports.userDetail = async(req,res) =>
{
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        res.render('users/userDetail',
        {
            pageTitle:"Profile",
            userProfile:user
        });
    } catch (error) {
        res.redirect("/");
    }
}