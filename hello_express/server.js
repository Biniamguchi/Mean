var express = require("express");
// require body-parser
var bodyParser = require('body-parser');
var session = require('express-session');
var port = process.env.PORT || 8000;

var app = express();

//.set
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

//.use
app.use(express.static(__dirname + "/static"));
// console.log(__dirname);
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));  // string for encryption

//routes
// app.get('/', function(request, response) {
//   response.send("<h1>Hello Express</h1>");
// })
app.get('/', function(request, response) {
  response.render('index', {title: "my Express project"});
})

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
app.post("/dojo", function (request, response){
    console.log("POST DATA \n\n", request.body)
    // set the name property of session.  
    request.session.name = request.body.name;
    console.log(request.session.name);
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    response.redirect('/');
});
app.listen(port, () => console.log(`listening on port ${ port }`));
// app.listen(8000, function() {
//   console.log("listening on port 8000");
