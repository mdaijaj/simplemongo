var mongoose=require('mongoose')

const url = "Enter url of mongodb access";

const connectDB= async()=>{
    await mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(()=>{
        console.log("connection successfully!")
    })
    .catch((err)=>{
        console.log(err)
    })
};

module.exports=connectDB();