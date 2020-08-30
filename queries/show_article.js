const model_data = require("../models/schema");
const path=require('path')

module.exports = async (req, res) => {
   try {
     var result=await model_data.find()
     console.log(result)
     res.render(path.join(__dirname, "..", "views/display_index.ejs"), {
      articles: result,
   });

   } catch (err) {
     console.log(err);
   }
 };