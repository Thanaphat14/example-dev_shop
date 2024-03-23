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

app.get('/market',(req, res)=>{
    if(loginSTATUS){
        db.query((`SELECT * FROM product`), (err, row)=>{
            if(err) throw err;
            db.query(`SELECT * FROM category`,(err, categories)=>{
                if(err) throw err;
                res.render('market',{ data: row , categoryList: categories });
            })
        })
    }else{
        res.redirect('/denied')
    }
})

app.get('/addItem',(req,res)=>{
    if(loginSTATUS){
        let sql = `SELECT * FROM category`

        db.query(sql, (err, row)=>{
            if(err) throw err;
            res.render('./addItem.ejs', {category: row});
        })
    }else{
        res.redirect('/denied')
    }
})

app.get('/editIem',(req,res)=>{
    if(loginSTATUS){
        res.render('./editItem.ejs')
    }else{
        res.redirect('/denied')
    }
})

app.get('/history',(req, res)=>{
    if(loginSTATUS){
        res.render('history',{CPdate: date});
    }else{
        res.redirect('/denied')
    }
})
app.get('/historyDetail',(req,res)=>{
    if(loginSTATUS){
        res.render('./historyDetail.ejs')
    }else{
        res.redirect('/denied')
    }
})
app.get('/editCategory',(req, res)=>{
    if(loginSTATUS){
        res.render('./editCategory.ejs' )
    }else{
        res.redirect('/denied')
    }
})



