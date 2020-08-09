var fileModule  = require('fs');

console.log("......program started...!");

 

fileModule.readFile('datafile.txt' , (err , data)=>{
                                           if(err) 
                                             throw err;
                                            
                                            else
                                                 console.log(data.toString());
                                             
                                        });


console.log("......program Ended...!");