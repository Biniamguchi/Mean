
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded());

app.use(express.static(path.resolve('assets')));

 app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');


    app.get('/', function(req, res) {
     res.render("index");
    });
  
    app.post('/result', function(req, res) {
        var submittedInfo = {
            name: req.body.name,
            dojoLocation: req.body.dojoLocation,
            favoriteLanguage: req.body.favoriteLanguage,
            comment: req.body.comment
    };

        res.render("result", { userData: submittedInfo });
    });

app.listen(4000, function() {
 console.log("listening on port 4000!");
});
