//schema connect
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const articleSchema = new Schema({
  first_name: String,
  last_name: String,
  contact_no: Number,
  email: String,
  about: String
});

module.exports = mongoose.model("Article", articleSchema);
