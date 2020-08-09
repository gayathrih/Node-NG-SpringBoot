var EventEmitter =require('events');

 //event
var emitter =   new EventEmitter();

//event lister
// emitter.on('user_creation' ,  function(name , pwd){
//                                     console.log("Account created for the "+name+"\n ur pwd is"+pwd);
//                               });


emitter.on('user_creation' ,  (name , pwd)=>{
    console.log("Account created for the "+name+"\n ur pwd is"+pwd);
});
//event handler
emitter.emit('user_creation','jhon','123');
emitter.emit('user_creation','sam','@$$We');
emitter.emit('user_creation','Allen','*%%123');
