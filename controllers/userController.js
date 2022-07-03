const { User } = require("../Models/UserModel");
const bcrypt = require("bcryptjs");

const signin = async (req, res) =>
{
    res.render("./signin");
}

const InsertUser = async function (req, res)
{   
    var UserData = new User();
    var Salt = await bcrypt.genSalt(10);
    // UserData.password = await bcrypt.hash(UserData.password,Salt);
    UserData.username = req.body.username;
    UserData.email = req.body.email;
    UserData.password = req.body.password;
    await UserData.save();
    res.send(UserData);
};

const UpdateUser = async function (req, res)
{   
    var UserData = await User.findById( req.params.id);
    UserData.username = req.body.username;
    UserData.email = req.body.email;
    UserData.password = req.body.password;
    var Salt = await bcrypt.genSalt(10);
    // UserData.password = await bcrypt.hash(UserData.password, Salt);
    await UserData.save();
    res.send(UserData);
}

const DeleteUser = async function (req, res)
{   
    await User.findByIdAndDelete(req.params.id)
    {
        res.send(req.params.id);
    }
       
};

const ViewUser = async function (req, res)
{   
    var UserData = await User.find();

    res.send(UserData);
};
const ViewOneUser = async function (req, res)
{ 
    var UserData = await User.findById( req.params.id);

    res.send(UserData);
};

const Authentication = async (req, res, next) =>
{
    var UserData = await User.findById( req.params.id);
    UserData.username = req.body.username;
    UserData.password = req.body.password;

    if (UserData.password == UserData.password)
    {
        req.session.user = UserData;
        res.redirect("/games");
    }
    else
    {
        res.send("Incorrect Password");
    }
}

module.exports = {InsertUser, UpdateUser, DeleteUser, ViewUser, ViewOneUser, Authentication, signin} ;