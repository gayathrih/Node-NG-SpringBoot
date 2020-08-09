function sayHello(name)
{
     console.log("Hello "+name);
}

  var func1=function(){
        console.log("fThis is non- para fucntion");
  }

  // Lmda Expression or arrow functions
  var func2= ()=>{
                   console.log("fThis is non- para fucntion_2");
           }
 var func3= (n1 , n2)=>{
            console.log("fThis is  para fucntion_2 "+n1+" "+n2);
    }

//sayHello("Sam");
//func1();
//func2();
func3(10, 11);

