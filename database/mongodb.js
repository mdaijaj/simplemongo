var mongoose=require('mongoose')

const url = "mongodb+srv://aijaj:aijaj123@cluster0.e6x8v.mongodb.net/<dbname>?retryWrites=true&w=majority";

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