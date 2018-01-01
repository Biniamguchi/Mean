var mongoose = require("mongoose");
var noteController = require("../controllers/noteController.js");

module.exports = function(app) {
        app.post("/notes/new", noteController.create)
        app.get("/notes", noteController.index);

        app.all("*", (req, res, next) => {
            res.sendFile(path.resolve("./anonymous-app/dist/index.html"))
        });
    }
    // app 
    //    .get('/notes', noteController.index)
    //    .post('/notes/new', noteController.create)
    //    .all("*", (req, res, next) => {
    //         res.sendFile(path.resolve("./anonymous-app/dist/index.html"))
    //     });
    // }