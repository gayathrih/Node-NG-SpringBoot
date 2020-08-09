//events

 var EventEmitter =require('events');

 //event
var emitter =   new EventEmitter();


//event listener

   emitter.on('wish' , function(){
           console.log("Good Evening");
   });

//event-handler
emitter.emit('wish');

console.log("Done!!");
