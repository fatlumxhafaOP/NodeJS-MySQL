const express = require('express');
const { connect } = require('http2');
const mysql = require('mysql'); 

const app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'demouser',
    password: 'hidden',
    database: 'demodb',
    port: '3306'
})

connection.connect((err) => {
    if (err){
        throw err
    }  else {
        console.log("Connected")
    }
})

 connection.query('CREATE TABLE demotable(id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY, thing VARCHAR(255) NOT NULL)', (err, rows) => {
     if (err){
         throw err
     } else {
         console.log("Data sent successfully!")
         console.log("Data sent:")
         console.log(rows)
     }
 })

connection.query("INSERT INTO demotable(id, thing) VALUES (1, 3)", (err, rows) => {
    if(err){
        throw err
    } else {
        console.log("Data inserted successfully!");
        console.log("Data inserted:");
        console.log(rows)
    }
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port)