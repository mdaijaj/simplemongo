const path = require("path");

// var model_data = require("../models/user");
const { ADD_DATA, GET_DATA } = require("../routes/_api");
const queryAddArticle = require("../queries/addArticle");
const queryShowArticle= require("../queries/show_article")


router.get("/", (req, res) => {
   console.log("api is working aijaj");
   return res.sendFile(__dirname + "/views/index.html");
});

/* POST Data. */
router.post(ADD_DATA, async (req, res) => {
   const {
      first_name = "",
      last_name = "",
      contact_no = "",
      email = "",
      about = "",
   } = req.body;

   const myBodyData = { first_name, last_name, contact_no, email, about };
   await queryAddArticle(myBodyData, res);
   console.log("add sucessfully !")
});


//all get data array
router.get(GET_DATA, async (req, res) => {
   await queryShowArticle(req,res);
});

module.exports = router;
