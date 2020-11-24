// login logout join /users


module.exports.login = (req,res) => 
{
    res.render('users/login',
    {
        pageTitle:"Login"
    });
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
    res.render('users/userDetail',
    {
        pageTitle:"User Detail"
    });
}

module.exports.editProfile = (req,res) => 
{
    res.render('users/editProfile',
    {
        pageTitle:"Edit Profile"
    });
}

module.exports.postJoin = (req,res) => 
{
    //register user into database
    //login for user
    res.redirect('/login');
}

module.exports.postLogin = (req,res) => 
{
    res.cookie("userId",1,
    {
        signed: true
    })
    res.redirect('/');
}