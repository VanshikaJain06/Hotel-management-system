
var http=require('http')
const fs=require('fs')
const path=require('path')
const hostname='127.0.0.1';
const port=5000;
const server=http.createServer(function(request,response)
{
    response.writeHead(200,{'Content-Type':'text/html'})
    var url=request.url;
    if (url=='/about'){
    fs.readFile(path.join('about.html'), 'utf-8',(err,data)=>
    {
        if (err) throw err;
        response.end(data); 
    });

}


else if (url=='/contact'){
    fs.readFile(path.join('contact.html'), 'utf-8',(err,data)=>
    {
        if (err) throw err;
        response.end(data); 
    });

}
});
server.listen(port,hostname,()=> 
{
    console.log('Nod eJs Server hosting at %s on port %s' ,hostname,port);

}); 