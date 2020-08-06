   var file = require('fs');

   console.log("prg started..!");

   var data=file.readFileSync('datafile.txt');

     console.log(data.toString());

    console.log("End......!");
   
