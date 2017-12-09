
const fs = require('fs');
const http = require('http');
    // port = 5000;

const server = http.createServer(function server(req, res){
  // Figure out which file the HTTP request is looking for
  let file;

  switch (req.url) {
    case "/":
      file = 'index.html'
      break;
    case "/ninjas":
      file = 'ninjas.html'
      break;
    case "/dojos/new":
      file = 'dojos.html'
      break;
    default:
      file = null;
      break;
  }
  // Send file or error to browser
  if (file !== null) {
    // First argument uses string interpolation
    fs.readFile(`${file}`, 'utf8', function(err, contents){
      if (err) { console.log(err); }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
  } else { // If file is null, not found
    res.writeHead(404);
    res.end("File not found!");
  }
});

// server.listen(port, function(){
//   console.log("Running on port: ", port);
// });

server.listen(5000);
// print to terminal window
console.log("Running in localhost at port 5000");


 