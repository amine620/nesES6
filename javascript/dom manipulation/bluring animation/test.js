let i=0
while (i<10) {
    setTimeout(
       function(){


          a(i);


       }, i*1000);
     i++;

     console.log("i de while "+i)
  }

  let a = function(i){

    console.log("i de la fonction "+i)
  }