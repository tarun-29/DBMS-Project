const express = require('express');
const router = express.Router();
const connection = require('../models/index')

router.get('/logout',(req, res)=>{
    console.log("Hellllllloooo")
    admin={};
    // admin.username = '';
    res.redirect('/')
});

router.get('/patient',(req, res)=>{
    // res.send('Hello')
    res.render('addPatient.ejs');
})

router.get('/employees',(req, res)=>{
    // res.send('Hello')
    res.render('addEmployees.ejs');
})

router.get('/deleteemploye/:id',(req,res)=>{
    console.log("heeeeeee")
    console.log(req.params.id)
    var q = `delete from employees where eid = ${req.params.id} `
    connection.query(q, (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            if(result){
                
                res.redirect('/dashboard');
            }
        }
    })
})

router.get('/deletepatient/:id',(req,res)=>{
    console.log(req.params.id);
    var q = `delete from patients where pid = ${req.params.id}`
    connection.query(q, (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            if(result){
                res.redirect('/dashboard')
            }
        }
    })
})

router.post('/searchemployees/name',(req, res)=>{
    // console.log(req.body.srchterm)
    console.log(typeof(req.body.srchterm));
    var q = `select * from employees where name like '%${req.body.srchterm}%'`
    connection.query(q,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result)
            if(result.length>0){
                console.log(result[0])
                employees = result;
                res.redirect('/dashboard')
            }
        }
    })
    // return 
})

router.post('/searchpatients/name',(req, res)=>{
    // console.log(req.body.srchterm)
    console.log(typeof(req.body.srchterm));
    var q = `select * from patients where pname like '%${req.body.srchterm}%'`
    connection.query(q,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            // console.log(result)
            if(result.length>0){
                // console.log("I Love You")
                console.log(result[0])
                patient = result;
                res.redirect('/dashboard')
            }
        }
    })
    // return 
})


router.get('/branch',(req, res)=>{
    var q1 = `select * from branch`
    connection.query(q1, (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            if(result.length>0){
                branch = result;
                console.log(result)
                res.render('branches.ejs',{branch}); 
            }
        }
    }) 
    // res.send('Hello')
})

router.get('/drugsuppliers',(req, res)=>{
    var q = `select * from drugsuppliers`
    connection.query(q, (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            // console.log(result)
            if(result.length>0){
                drugsuppliers = result;
                console.log(drugsuppliers);
                res.render('drugSuppliers.ejs', {drugsuppliers})
            }
        }
    })
})

module.exports = router;