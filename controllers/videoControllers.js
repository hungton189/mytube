// home search /videos

module.exports.home = (req,res) => 
{
    res.render('home');
}

module.exports.search = (req,res) => 
{
    res.send('search');
}