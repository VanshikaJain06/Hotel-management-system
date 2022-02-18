const mysql=require('mysql2');
const express=require('express');
var app=express();
const parser=require('body-parser');
app.use(parser.json());
var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'123456',
        database:'hotel_management'
    });
    connection.connect((err)=>
    {
        if(!err)
        console.log('DB Connected...');
        else
        console.log('Error');
    })
    app.listen(5700,()=>console.log('Server Startred...'));
    app.get('/employees',(req,res)=>
    {
        connection.query('SELECT *FROM employees',(err,rows,fields)=>
        {
            if(!err)
            res.send(rows);
            else
            console.log("error");
        })
    })
    app.get('/employee/:Id',(req,res)=>
    {
        connection.query('SELECT *FROM employees WHERE Id=?',[req.params.Id],(err,rows,fields)=>
        {
            if(!err)
            res.send(rows);
            else
            console.log("error");
        })
    })

// app.get('/add',(req,res)=>
// {
//     var post={Name:'Kevin',Ecode:'Emp007',Salary:25000};
//     var sql='INSERT INTO employee SET ?';
//     var query=connection.query(sql,post,(err,result)=>
//     {
//         if(err) throw error;
//         res.send("Inserted Rows.....")
//     });
// });
// app.get('/update/:id',(req,res)=>
// {
//     var name1='Reena'
//     var sql=`UPDATE employee SET Name='${name1}' WHERE Empid=${req.params.id}`;
//     var query=connection.query(sql,(err,result)=>
//     {
//         if(err) throw err;
//         res.send("Updated the Rows.....")
//     });
// });
// app.get('/delete/:id',(req,res)=>
// {
//     var sql=`DELETE FROM employee WHERE Empid=${req.params.id}`;
//     var query=connection.query(sql,(err,result)=>
//     {
//         if(err) throw err;
//         res.send("Deleted the Rows.....")
//     });
// });