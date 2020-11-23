const express = require('express');
const mysql = require('mysql')
const app = express();

app.get("/",((req, res) => {
    res.send('Homepage !')
}));

//Databse connection
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "",
    database: "deghjee"
});
db.connect((err)=>{
    if (err) {
        throw err;
    }
    console.log('Database connected successfully !')
})

app.listen(4000,()=>{
    console.log("Server is up on P:4000")
})