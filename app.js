const express = require("express");
const app = express();

const session = require("express-session");
app.use(session({secret: 'keyboard cat',resave: false,saveUninitialized: true,cookie: { secure: true }
}));
//var productsApi = require('./api/productsApi');
var userApi = require('./api/userApi');


const viewEngine = require("ejs");
app.set("view engine", "ejs");
app.use(express.json());
app.use( express.static("public"));
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
const mongoose = require("mongoose");
mongoose
   // .connect("mongodb://aeshashahzad:ayesha1346cui@ac-auzjbha-shard-00-00.atoxoya.mongodb.net/GamingStore",  
    // .connect("mongodb://aeshashahzad:ayesha1346cui@ac-auzjbha-shard-00-00.atoxoya.mongodb.net:27017,ac-auzjbha-shard-00-01.atoxoya.mongodb.net:27017,ac-auzjbha-shard-00-02.atoxoya.mongodb.net:27017/?ssl=true&replicaSet=atlas-f4tops-shard-0&authSource=admin&retryWrites=true&w=majority/GamingStore", 
    .connect("mongodb://localhost:27017/GamingStore", 

            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
    .then( () => 
    {
        console.log("CONNECTION ESTABLISHED WITH DATABASE");
    })
    .catch( (error => 
    {
        console.log("ERROR WHILE CONNECTING DATABASE: " + error);
    }));

const homeRoutes = require("./routes/homeRoutes");
const userRoutes = require("./routes/userRoutes");
//const userApi = require("./api/userApi.js"); //

app.use("/", homeRoutes);
app.use("/users/", userRoutes);
app.use("/api/users/", userApi);

const port = process.env.PORT || 8080
app.listen(port);