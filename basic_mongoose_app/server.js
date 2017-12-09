
var express = require('express');

var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
 name: String,
 age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

mongoose.Promise = global.Promise;

var userInstance = new User()
userInstance.name = 'Andriana'
userInstance.age = 29
userInstance.save(function(err){

})
User.update({name:'Andrinnna'}, {name:'Andriana'}, function(err){

})

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
     User.find({}, function(err, users) {
     // if there is an error console.log that something went wrong!
    if(err) 
      console.log('something went wrong');

    res.render('index', {'users': users});
        })
  })
    

// Add User Request 
app.post('/users', function(req, res) {
  console.log("POST DATA", req.body);

  var user = new User({name: req.body.name, age: req.body.age});
  
  user.save(function(err) {
   
    if(err) {
      console.log('something went wrong');
    } else { 
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})
app.post('/reset', (request, response) => {

User.remove({}, function(err){

})

  response.redirect('/');
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})