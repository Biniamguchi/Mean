const http = require('http'),
        fs = require('fs');
        port = 7077;

const server = http.createServer(function(req, res) {

  // SPLIT THE URL IN ORDER TO EXAMINE IT BETTER
  const splitURL = req.url.split('/'),
      fileType   = splitURL[1], // Set of characters after the first /
      file       = splitURL[2];

  switch (fileType) {
    case "styles":
    // SERVE CSS!
      serveCSS(file, res);
      break;
    case "images":
    // SERVE A JPG IMAGE!
      serveJPG(file, res);
      break;
    default:
    // SERVE AN HTML FILE!
      switch(fileType){
        case "cars": // If firstChunk is 'cars', could be one of two routes.
          if (file === "new") {
            serveHTML("carsNew.html", res);
          } else {
            serveHTML("cars.html", res);
          }
          break;
        case "cats":
          serveHTML("cats.html", res);
          break;
        default:
          // We don't recognize this URL -- serve a 404!
          serve404(res);
      }
  }
});

// We call on these help functions, giving each the response object (and filename in most cases) to serve the correctly-configred response.
// If any callback gets an error, meaning the file wasn't found, we serve 404!

function serveHTML(filename, res) {
  // Read a particular file...
  fs.readFile(`views/${filename}`, 'utf8', function(error, contents){
    // Check to see if an error exists
    if (error) { return serve404(res) }
    // Respond to the browser
    res.writeHead(200, {'Content-type' : 'text/html' });
    res.write(contents);
    res.end();
  });
}

function serveCSS(filename, res) {
  // Read a particular file...
  fs.readFile(`stylesheets/${filename}`, 'utf8', function(error, contents) {
    // Check to see if an error exists
    if (error) { return serve404(response) }
    // Respond to the browser
    res.writeHead(200, {'Content-type' : 'text/css' });
    res.write(contents);
    res.end();
  });
}

function serveJPG(filename, res) {
  // Read a particular file...
  fs.readFile(`images/${filename}`, function(error, contents) {
    // Check to see if an error exists
    if (error) { return serve404(res); }
    // Respond to the browser
    res.writeHead(200, {'Content-type' : 'image/jpg' });
    res.write(contents);
    res.end();
  });
}

function serve404(res){
  res.writeHead(404);
  res.end("File not found!");
}

// server.listen(7077);
// console.log("Running on 7077");
server.listen(port, function(){
console.log("Running on port: ", port);
});





