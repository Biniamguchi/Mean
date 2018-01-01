// Express
var express = require('express');
var app = express();

// Path
var path = require('path');

// CORS
var cors = require('cors');
app.use(cors());

// Static Directory
app.use(express.static(__dirname + '/anonymous-app/dist'));

// Body Parser 
var parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Morgan (optional)
var morgan = require("morgan");
app.use(morgan('dev'));

// require("./server/config/routes.js")(app);

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

app.listen(9200, function() {
    console.log("listening on port 9200");
})