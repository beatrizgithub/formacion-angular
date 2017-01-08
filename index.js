'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3678;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/prueba/:nombre?', function(req,res) {
    if (req.params.nombre) {
        var nombre = req.params.nombre;
    } else {
        var nombre = "SIN NOMBRE";
    }

    res.status(200).send({
        data: [2,3,4],
        message: "Hola " + nombre
    });
});

app.listen(port, function() {
    console.log("Escuchando en http://localhost:" + port);
})
