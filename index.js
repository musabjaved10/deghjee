const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user')
app.use('/user', userRoute);

const menuRoute = require('./routes/menu');
app.use('/menu/cuisines', menuRoute);

const orderRoute = require('./routes/order');
app.use('/order', orderRoute);


//Database connection;
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "deghjee"
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Database connected successfully !')
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.get('/',((req, res) => {
//     /* Here we are getting the hashed password from the callback,
// we can save that hash in the database */
//     bcrypt.hash(my_password, saltRounds, (err, hash) => {
//         console.log(`Entered password : ${my_password}:\n Hashed password : ${hash}`)
//          my_hash = hash;
//     });
//
//     /* Here we can compare the hashed password after we get it from
//     the database with the plaintext password */
//     bcrypt.compare(my_password, my_hash, function(error, response) {
//         // response == true if they match
//         // response == false if password is wrong
//
//         console.log(response);
//     });
// }))


app.get('/show/', (req, res) => {
    const sql = 'SELECT * FROM d_caterer';
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        console.log(data[0].ca_passwd);
    });
})
//show product category wise
app.get('/show/product', (req, res) => {
    const sql = 'SELECT category_id FROM d_category WHERE ct_name = \'Biryani\' ';
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        console.log(data);
    });
})

app.listen(3000, () => {
    console.log('server is up on 300')
})