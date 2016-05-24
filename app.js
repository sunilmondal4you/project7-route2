/**
 * Created by abc on 23/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000,function () {
    console.log("Server is started.");
});