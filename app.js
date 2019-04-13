var express = require('express');
var app = express();
const port = process.env.port||3000;
const bodyParser = require("body-parser");
var landing = require('./routes/landing');
var dashboard = require('./routes/dashboard');
var addPatient = require('./routes/addPatient');
var addEmployees = require('./routes/addEmployees')
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));

admin = {}
employees = []

patient = []

drugsuppliers = {}

branch = {}

error = {
    err: ''
}

app.get('/',(req,res)=>{
    if(Object.keys(admin).length>0){
        return res.redirect('/dashboard')
    }
    return res.render('landing.ejs')
})


app.use('/',landing);
app.use('/',dashboard);
app.use('/',addPatient);
app.use('/',addEmployees);


app.listen(port,(req,res)=>{
    console.log('Server Started');
})