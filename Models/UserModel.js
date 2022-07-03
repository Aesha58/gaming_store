const mongoose = require("mongoose");

const User = mongoose.model("User", new mongoose.Schema({
    
    username: { type: String, unique: true},
    email: {type: String, unique: true},
    password: { type: String, min: 8}

}));

module.exports = { User };