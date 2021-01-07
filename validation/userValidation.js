module.exports.postJoinValidation = (req,res,next) => 
{
    let errors = [];
    const {body:
        {
            name,email,password,password2
        }} = req;
    if(name.split(' ').join("")==="")
    {
        errors.push("Full name is wrong")
    }
    if(email.split('@').length < 2)
    {
        errors.push("Email is wrong")
    }
    if(password.split(' ').join("")==="")
    {
        errors.push("Password is wrong")
    }
    if(password !== password2)
    {
        errors.push("Verify password name is wrong")
    }
    if(errors.length > 0)
    {
        res.render('users/join',
        {
            pageTitle:"Join",
            errors,
            value:
            {
                name,email,password,password2
            }
        });
    }
    next();
}

module.exports.postLogin = (req,res,next) => 
{
    let errors = [];
    const {body:
        {
            email,password
        }} = req;
    if(email.split('@').length < 2)
    {
        errors.push("Email is wrong")
    }
    if(password.split(' ').join("")==="")
    {
        errors.push("Password is wrong")
    }
    if(errors.length > 0)
    {
        res.render('users/login',
        {
            pageTitle:"login",
            errors,
            value:
            {
                email,password
            }
        });
    }
    next();
}