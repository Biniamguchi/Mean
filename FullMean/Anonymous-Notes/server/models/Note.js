var mongoose = require("mongoose");

// var Note = mongoose.model("Note",new mongoose.Schema({
var NoteSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
        minlength:3,
        maxlength:255},
        },{timestamps:true});

var Note = mongoose.model('Note', NoteSchema);
// })