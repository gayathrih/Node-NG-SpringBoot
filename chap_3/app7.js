
//callback hell
var fs =  require('fs');
 var file= "data.txt"; 

 fs.exists( file ,  function(exists)
                    {

                              if(exists)
                              {
                                    fs.stat(file , function(err , stats)
                                                   {
                                                           if(err) throw err;
                                                           
                                                           if(stats.isFile())
                                                            {
                                                                 fs.readFile(file , function(err,data){
                                                                       if(err) throw err;
                                                                       else
                                                                          console.log(data.toString());
                                                                 }
                                                                 
                                                                 );
                                                            }
                                                    }

                                );
                           } 
                     }
 
          );