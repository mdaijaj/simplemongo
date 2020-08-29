//schema connect
var mongoose=require('mongoose')
var Schema=mongoose.Schema;

const articleSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    contact_no: Number,
    email: String,
    about: String
});


const Article = mongoose.model("Article", articleSchema);

