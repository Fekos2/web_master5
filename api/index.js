const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const cryto_js = require('crypto-js');

const config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'login',
});

/*config.connect(error, () => {
    if(error) throw error;
    console.log("database server running");
})*/

//app.listen(PORT , () => console.log("running in: ${PORT}"));

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

/*app.get('/registrarse', (req,res) => {
    res.send("hola ctm xd");
})*/
/*
app.post('/login', (req, res) => {
    const nombre = req.params.Nombre;
    pool.query('SELECT * FROM registrate WHERE Nombre = ?', nombre, (error, result) => {
        if (error) throw error;

        res.send(result);
    });
});*/
/*
app.get("/login", (req, res, next) => {
    "use strict";
    const getProduct = "SELECT * FROM registrate";
    pool.query(getProduct, (err, rows, fields) => {
      if (err) {
        res.status(500).send({ error: 'Something failed!' })
      };
      res.send("hola");
      return "Pog";
      //res.status(200).send({'test':'foo'});
    });
});*/
app.get("/registrarse", (req, res, next) => {
    const sql = "SELECT * FROM registrate";
    config.query(sql, (error, results) =>{
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        } else {
            res.send('Not results');
        }
    });
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
 
    pool.query('UPDATE users SET ? WHERE id = ?', [req.body, id], (error, result) => {
        if (error) throw error;
 
        res.send('User updated successfully.');
    });
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
 
    pool.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        res.send('User deleted.');
    });
});

app.post('/registrarse', (req, res) => {
    pool.query('INSERT INTO registrate SET ?', req.body, (error, result) => {
        if (error) throw error;
        res.status(201).send(`User added with ID: ${result.insertId}`);
    });
});

app.listen(port, () => {
    console.log('listening port:' + port);
})