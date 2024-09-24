//let a =10
//const b=20
//var c=30
let a=300
if(true){
    let a =10
    const b=20
    var c=30
    //console.log("INNER:" ,a);

}
//console.log(a);
//console.log(b);
//console.log(c);


function One(){
    const username ="sanjeet"
    {
        function two(){
            const website ="youtube"
            console.log(username);
        }
        
    }
    //console.log(website);
    //two()
}
One()


if(true){
    const username = "sanjeet kumar"
    if(username === "sanjeet kumar"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);



//addOne(100)
//console.log(addOne(100));
function addOne(num){
    return num +1
}
addOne(100)
//console.log(addOne(100));

addTwo(100)//cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2
}
