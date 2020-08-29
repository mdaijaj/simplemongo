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