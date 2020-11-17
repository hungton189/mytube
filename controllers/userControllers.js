// login logout join /users

module.exports.login = (req,res) => 
{
    res.send('login');
}

module.exports.logout = (req,res) => 
{
    res.send('logout');
}

module.exports.join = (req,res) => 
{
    res.send('join');
}