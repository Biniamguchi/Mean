var express  = require("express");
var mongoose = require("mongoose");
var bodyParse   = require("body-parser");
var session  = require("express-session");
var app      = express();
app.use(express.static(__dirname + "/client/static"));
app.use(bodyParse.urlencoded({ extended: true }));
app.use(session({secret:"thisissecret"}));
app.set("views",__dirname+"/client/views");
app.set("view engine","ejs");
app.listen(8040);

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);