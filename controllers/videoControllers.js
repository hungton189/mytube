// home search /videos

module.exports.home = (req,res) => 
{
    res.render('videos/home',
    {
        pageTitle: 'Home',
    });
}

module.exports.search = (req,res) => 
{
    const {query: {search}}  = req;
    res.render('videos/search',
    {
        pageTitle: 'Search',
        search
    });
}