const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const ejs=require('ejs')

const app = express()

//use of ejs file ejs convert data and fronted
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '../public'));
app.set('view engine', 'ejs') 								
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))




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
connectDB()


//schema connect
const articleSchema = new mongoose.Schema({
        first_name: String,
        last_name: String,
        contact_no: Number,
        email: String,
        about: String
    });


    const Article = mongoose.model("Article", articleSchema);


//endpoint
//Home
app.get('/', (req, res) => {
    console.log("api is working aijaj")
    return res.sendFile(__dirname + '/views/index.html')
})

/* POST Data. */
app.post('/addArticle', function(req, res) {
    const mybodydata = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        contact_no: req.body.contact_no,
        email: req.body.email,
        about: req.body.about
    }
    var data = Article(mybodydata);
    //var data = UsersModel(req.body);
    data.save()
    .then((data)=>{
        console.log(data)
        res.send("data inserted sucessfully!")
    })
    .catch((err)=>{
        console.log(err)
    })
});



app.get('/display', (req, res)=> {
    Article.find()
    .then((users)=>{
        console.log(users)
        // res.sendfile(__dirname + '/views/dummy.html')
        return res.render(__dirname + '/views/display_index.ejs', { articles: users })
        // return res.render('display_index', { users:users})
        // res.send('User Listing!');
    })
    .catch((err)=>{
        console.log(err)
    })
});


//server port connect
const port=5000
app.listen(port, () =>{
    console.log('Example app listening on port!' ,port)
})