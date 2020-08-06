/*var httpModule= require("http");
   
   var myserver = httpModule.createServer(function(req , res ){
                               res.writeHead(200 , {"content-type": "text/plain"});
                              res.end("Welcome to Node Server Demo");
                         
                           });

   myserver.listen(1122);

*/


/*
var httpModule= require("http");
   
   httpModule.createServer(function(req , res ){
                               res.writeHead(200 , {"content-type": "text/html"});
                               res.write("<h1> Welcome to Node Server</h1>");
                              res.end("<h2><font color='red'>Demo1</font></h2>");
                         
                           }).listen(12345 , function(){
                                                console.log("server started...");
                                              });

*/


var httpModule= require("http");
   
   httpModule.createServer( (req , res )=>{
                               res.writeHead(200 , {"content-type": "text/html"});
                               res.write("<h1> Welcome to Node Server</h1>");
                              res.end("<h2><font color='red'>Demo1</font></h2>");
                         
                           }).listen(12345 , ()=>{
                                                console.log("server started...");
                                              });

  

  

