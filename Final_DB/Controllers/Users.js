const Users = require('../Models/Users');

exports.userLogin = (req, res) => {
    // destructuring since multiple inputs(usernaame/email) are received from body - not possible from url
    // for the below line to work, add an express.json() middleware in app.js file
    const {user, pwd} = req.body
    Users.find({
        username: user,
        password: pwd
    })
    .then(response => {
        let msg, auth
        if(response.length == 0)
        {
            msg = 'User not authenticated successfully'
            auth = false
        }
        else
        {
            msg = 'User authenticated successfully'
            auth = true
        }
        res.status(200).json({
            message: msg,
            User : response,
            isAuthenticated: auth
        })
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

exports.userSignUp = (req, res) => {
    const {user, pwd, fn, ln} = req.body;
    // creating an object in Users collection
    const userObj = new Users({
        username: user,
        password: pwd,
        firstname: fn, 
        lastname: ln
    })
    // saving the object in Users collection and returning the response
    userObj.save()
    .then((response) => {
        res.status(200).json({
            message: "User added successfully",
            user : response
        })
    })
    .catch((err) =>{
        res.status(500).json({error: err})
    })
}