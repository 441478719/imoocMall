let http=require('http');
let fs=require('fs');
let url= require('url');
let util=require('util');

var server =http.createServer((req,res)=>{
   var pathname= url.parse(req.url).pathname;
   fs.readFile(pathname.substring(1),(error,data)=>{
       if(error)
       {
           res.writeHead(404,{
               'content-type':'text/html'
           })
       }
       else
       {
           res.writeHead(200,{
               'content-type':'text/html'
           })
           res.write(data);
       }
       res.end();
   })

})
server.listen(3000,'127.0.0.1',()=>{
    console.log('请访问你localhost：3000')
})