const express = require('express');
const router = express.Router({mergeParams: true});
const connection = require('../models/index');

router.post('/addEmployees',(req,res)=>{
    // res.send("helllo")
    console.log('Hello')
    var ename = req.body.ename;
    var gender = req.body.gender;
    var DOB= req.body.DOB;
    var BranchId = req.body.bid;
    console.log(ename)
    console.log(gender)
    console.log(DOB)
    console.log(BranchId)
    var q = `insert into employees(name, DOB, gender, deptname) values('${ename}', '${DOB}','${gender}','${BranchId}') `
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