//avoiding callback hell

var fs =  require('fs');
 var file= "data.txt"; 

 function ReadFile(err , data){

       if(err)
         throw err;
         
       else
         console.log(data.toString());
 }


 function mystats(err , stats){

       if(err)
         throw err;
        if(stats.isFile())
         {
              fs.readFile(file , ReadFile);
         }
         
 }

 function file_exists(exists){
      if(exists)
      fs.stat(file, mystats);
     }


 //#1

 fs.exists(file , file_exists  );