var session = require('express-session');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();

var sessionConfig  = {
  saveUninitialized: true,
  resave: false,
  name: 'session',
  secret: 'thisIsSuperSekret'
};

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views'); 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/static"));
app.use(session(sessionConfig));

app.get('/', (request, response) => {
  response.render('index', { counter: addOneToCounter(request) });
});

app.post('/by-two', (request, response) => {
  addOneToCounter(request);

  response.redirect('/');
});

app.post('/reset', (request, response) => {
  request.session.destroy();

  response.redirect('/');
});

function addOneToCounter(request) {
  return request.session.counter = request.session.counter ?
                                    request.session.counter + 1 : 1;
}
app.listen(8000, function() {
  console.log("listening on port 8000");
})
