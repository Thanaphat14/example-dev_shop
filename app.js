const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const db = require("./db");
const {query} = require("express");


const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extend:true}));
app.use(express.static('public'));
app.use(express.static("views"));

const port = 3001;

let loginSTATUS = false;

let loginUID = 0;


app.set('view engine', 'ejs');

app.get('/denied', (req, res)=>{
    res.render('notAuthorized.ejs')
})

app.get('/centreLogin', (req, res)=>{
    // history.pushState(null, null, location.href);
    // history.go(1)
    res.render('./login.ejs');
})

app.get('/seller',(req, res)=>{
    if(loginSTATUS){
        res.render('./seller.ejs');
    }else{
        res.redirect('/denied')
    }
})

app.get('/centreHome', (req, res)=>{
    if(loginSTATUS){
        res.render('./home.ejs');
    }else{
        res.redirect('/denied')
    }
})

app.get('/category',(req, res)=>{
    if(loginSTATUS){
        db.query(`SELECT * FROM category`, (err, row)=>{
            if(err) throw err;
            res.render('category',{ categoryList: row });
        })
    }else{
        res.redirect('/denied')
    }
})

app.get('/addCategory',(req,res)=>{
    if(loginSTATUS){
        res.render('./addCategory.ejs')
    }else{
        res.redirect('/denied')
    }
})

app.get('/market', (req, res) => {
    if (loginSTATUS) {
        res.render('./market.ejs');
    } else {
        res.redirect('/denied');
    }
});

app.get('/addItem', (req, res) => {
    if (loginSTATUS) {
        res.render('./addItem.ejs');
    } else {
        res.redirect('/denied');
    }
});

app.get('/editItem', (req, res) => {
    if (loginSTATUS) {
        res.render('./editItem.ejs');
    } else {
        res.redirect('/denied');
    }
});


