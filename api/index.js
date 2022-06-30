const express = require('express');
const cors = require('cors');

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
    res.send("hola ctm xd")
})

app.post('/registrarse', (req,res) => {
    //res.send("hola ctm")
    res.send(req.body)
})

app.listen(port, () => {
    console.log('listening port:' + port);
})