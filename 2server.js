const http=require('http');
const {load}=require('./1server.js');
const writer = require('./1server.js')
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors({
    origin:"*",
}))
const port=8080;
app.listen(port,()=>console.log("server is running..."));
app.get('/user',(req,res)=>
{
    res.send(load())
});

writer.filewriter();

