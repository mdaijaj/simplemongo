const express = require('express');
const bodyParser = require('body-parser');

const app = express()

//use of ejs file ejs convert data and fronted
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '../public'));
app.set('view engine', 'ejs') 								
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


//connect db
require('./database/mongodb')


//routes
router=express.Router();
app.use('/', router)
require('./routes/routes')

//server port connect   
const port=5000
app.listen(port, () =>{
    console.log('App listening on port!' ,port)
})