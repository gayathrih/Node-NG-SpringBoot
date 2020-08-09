 require('promise');

 //pending state
    var promise =  new Promise( function(reslove , reject){
                                      console.log("This is Pending state");
                                       setTimeout(reslove , 5000)
                                }
                            );
//sucess
 promise.then( function()
                   { 
                        console.log("Fulfilled / Sucess");
                    }
            );
//reject
  promise.catch( function(err){
                      console.log(err);
                  }
                );
