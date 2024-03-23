const express = require('express');
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


// POST UNDER =======================================
// POST UNDER =======================================
// POST UNDER =======================================
// POST UNDER =======================================
// POST UNDER =======================================


app.post('/centreLogin', (req, res)=>{

    const username = req.body.username;
    const password = req.body.password;

    console.log(`INPUT ID: ${username}`);
    console.log(`INPUT PW: ${password}`);

    let loginSql = `SELECT * FROM user WHERE user_name  = '${username}'`

    db.query(loginSql, (err, row)=>{

        // if(err){
        //     throw err;
        // }

        try{
            if(row[0].user_name === username && row[0].user_password === password){
                console.log("SEARCHED ID: "+ row[0].user_name)

                loginSTATUS = true;
                console.log("LOGIN SUCCESS :: STAUTS-200")
                console.log("LOGIN STATUS: "+ loginSTATUS)
                console.log("LOGIN UID: "+ row[0].uid)

                res.render('home',{username: row[0].nickname, uid:row[0].uid});

            }
        } catch (err){
            console.log("LOGIN FAILURE :: STAUTS-500")
            console.log("LOGIN STATUS: "+ loginSTATUS)
            // res.write(`<script>alert('INCORRECT username OR password')</script>`)
            res.render('login');
            // throw err;
        }


    })

})

app.post('/logOut',(req, res)=>{
    loginSTATUS = false;
    console.log("LOGIN STATUS: "+ loginSTATUS)
    res.redirect('/centreLogin')

})

app.post('/seller', (req,res)=>{
    let sqlInOrder = `SELECT * FROM product ORDER BY product_sales_count DESC`

    db.query(sqlInOrder, (err, row)=>{
        res.render('seller', {list : row})
        console.log(`product id: ${row[0].product_id}`)
        console.log(`product id: ${row[0].product_name}`)
    })
})


app.post('/home', (req, res)=>{

})

app.post('/category', (req, res)=>{
    if(loginSTATUS){
        db.query(`SELECT * FROM category`,(err, category)=>{
            if(err) throw err;

            res.render('category',{ categoryList: category });
        })
    }else{
        res.redirect('/denied')
    }
})

app.post('/addCategory', (req, res)=>{
    if(loginSTATUS){
        let category = req.body.categoryName;
        let sql = `INSERT INTO category(category_name) VALUES('${category}');`

        db.query(sql,(err, categories)=>{
            if(err) throw err;
            console.log(`Added Category: ${category}`);

            for(let i = 0; i < categories.length; i++){
                console.log(`This is ${i+1} Item in Category Table: ${categories[i].category_name}`)
            }

        })
        res.redirect('/category')
    }else{
        res.redirect('/denied')
    }
})
