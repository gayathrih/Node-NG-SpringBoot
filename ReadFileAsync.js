 var fileModule  = require('fs');

    console.log("......program started...!");
    
     /* fileModule.readFile('datafile.txt' , function(err , data){
                                               if(err) {
                                                  console.log(err);
                                                 }
                                                else{
                                                     console.log(data.toString());
                                                 }
                                            });


    */

   fileModule.readFile('datafile.txt' , (err , data)=>{
                                               if(err) 
                                                  console.log(err);
                                                
                                                else
                                                     console.log(data.toString());
                                                 
                                            });


  console.log("......program Ended...!");