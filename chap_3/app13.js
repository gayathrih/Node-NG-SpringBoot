var EventEmitter =require('events');

 //event
var emitter =   new EventEmitter();

//function myHandler

function a(name , pwd ){
    console.log("name = "+name+" Pwd: "+pwd);
}
emitter.on('user_creation' , a);




//event handler
emitter.emit('user_creation','Allen','*%%123');

 

emitter.emit('user_creation','jhon','123');

emitter.removeListener('user_creation',a);
emitter.emit('user_creation','sam','@$$We');



