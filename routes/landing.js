var express = require('express');
var router = express.Router({mergeParams: true});
const connection = require('../models/index')
// router.get('/',(req,res)=>{

//     res.render('landing.ejs',{admin: {}, error: error.err})
// })

router.post('/dashboard',(req, res)=>{
    // res.send("Hello");
    // console.log(req.body)
    var username = req.body.username;
    // console.log(req.body.username)
    var password = req.body.password;
    // console.log(password);
    var q1 = `select eid, name, DOB, gender, deptname from employees `;
    var q2 = `select pid, pname, DOB, gender, disease from patients `
    connection.query(q1,(err, res)=>{
        if(err){
            console.log(err);
        }
        else{
            if(res.length>0)
            employees = res;
        }
    })
    connection.query(q2, (err,res)=>{
        if(err){
            console.log(err)
        }
        else{
            if(res.length>0)
            patient = res;
        }
    })
    var q = `select * from admin where username ='${username}'`;
    connection.query(q, (error, result, fields)=>{
        if(error){
            console.log(error);
            // error.err = error;
        }else{
            // console.log(password+" "+result[0].password);
            if(result[0]){
                if(password === result[0].password){
                    // console.log(patient);
                    // console.log(employees);
                    admin = result[0];    
                    // res.render('')
                    return res.render('dashboard.ejs',{admin, employees, patient});
                }
            }
        }
    })
    // res.redirect("/");
})

router.get('/dashboard',(req,res)=>{
    var q1 = `select eid, name, DOB, gender, deptname from employees `;
    var q2 = `select pid, pname, DOB, gender, disease from patients `
    connection.query(q1,(err, res)=>{
        if(err){
            console.log(err);
        }
        else{
            if(res)
            employees = res;
        }
    })
    connection.query(q2, (err,res)=>{
        if(err){
            console.log(err)
        }
        else{
            if(res)
            patient = res;
        }
    })
    res.render('dashboard.ejs',{admin, employees, patient})
})

module.exports = router;



// q = `select * from employees`
//                     connection.query(q, function(err,result){
//                         if(err){
//                             console.log(err);
//                         }                    
//                         else{
//                             employees = result[0]
//                             console.log(employees)
//                             return res.render('dashboard.ejs',{admin: admin, employees: employees});
//                         }
//                     })