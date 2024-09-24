//Imediately Invoke Function Exepression
(function chai (){
    //it is named IIFE
    console.log(`DB CONNECT`);
})();//in that problem ; used then execute the program
((name) =>{
    //it is unnamed IIFE or arrow function
    console.log(`DB CONNECT TWO ${"sanjeet"}`);

})("sanjeet")
//remove function and use arrow function that execute the program