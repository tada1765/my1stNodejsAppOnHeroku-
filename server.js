const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;


app.use(express.static("public"));

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) =>{
    res.render('index.ejs')
    //res.redirect('/')
})
app.get('/about', (req, res) =>{
    res.render('about.ejs')
    //res.redirect('/about')
})
app.get('/portfolio', (req, res) =>{
    res.render('portfolio.ejs')
    //res.redirect('/portfolio')
})
app.get('/services', (req, res) =>{
    res.render('services.ejs')
    //res.redirect('/services')
})
app.get('/contact', (req, res) =>{
    res.render('contact.ejs')
    //res.redirect('/contact')
})
app.get('/more', (req, res) =>{
    res.render('more.ejs')
    //res.redirect('/more')
})
app.listen(PORT,()=>{
    console.log(`Server Listening ${PORT}`);
})

// app.listen(3000)