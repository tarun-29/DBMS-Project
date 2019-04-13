const express = require('express');
const router = express.Router({mergeParams: true});
const connection = require('../models/index');

router.post('/addPatient',(req,res)=>{
    console.log('Hello')
    var pname = req.body.pname;
    var gender = req.body.gender;
    var DOB= req.body.DOB;
    var dignosedby = req.body.dignosedby;
    console.log(typeof (pname))
    console.log(typeof(gender))
    console.log(typeof(DOB))
    console.log(typeof(dignosedby));
    var q = `insert into patients(pname, DOB, gender, disease) values('${pname}','${DOB}','${gender}','${dignosedby}') `
    connection.query(q,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            // patient = result;
            res.redirect('/dashboard');
        }
    })
})

module.exports = router;