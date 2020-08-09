
//async fcunti -  callback func - if u pass fucntion as an agruent to another func

require('fs');
function greeting(){
    console.log("hello");   
}

function  msg( name )
{
    console.log(name);
}


msg();
msg("sam" , greeting());
msg(10, greeting());

//option parame - ES6 - ECMA Scrpt - microso - typescript pro