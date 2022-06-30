const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'log in',
};

const pool = mysql.createPool(config);

const app = express();
const port = 4400;

app.use(express.urlencoded({
        extended: true 
    })
)

app.use(express.json({
        type: "*/*"
    })
)

app.use(cors());

app.get('/registrarse', (req,res) => {
    res.send("hola ctm xd");
})


app.post('/registrarse', (req, res) => {
    pool.query('INSERT INTO usuarios SET ?', req.body, (error, result) => {
        if (error) throw error;
 
        res.status(201).send(`User added with ID: ${result.insertId}`);
    });
});

//app.post('/registrarse', (req,res) => {
    //console.log(req.body);
//})

app.listen(port, () => {
    console.log('listening port:' + port);
})