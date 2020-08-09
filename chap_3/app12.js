var EventEmitter =require('events');

 //event
var emitter =   new EventEmitter();




emitter.once('user_creation' ,  (name , pwd)=>{
    console.log("Account created for the "+name+"\n ur pwd is"+pwd);
});


emitter.once('sum' ,  (n1 , n2)=>{
    console.log('sum = '+(n1+n2));
});

//event handler
emitter.emit('user_creation','Allen','*%%123');
emitter.emit('user_creation','jhon','123');
emitter.emit('user_creation','sam','@$$We');

emitter.emit('sum',10,11);

