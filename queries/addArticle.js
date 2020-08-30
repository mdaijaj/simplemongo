const model_data = require("../models/schema");

module.exports = async (bodyData, res) => {
  var data = await model_data(bodyData);
  //var data = UsersModel(req.body);
  try {
    await data.save();
    res.json("data inserted successfully");
  } catch (err) {
    console.log(err);
  }
};


