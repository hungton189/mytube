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