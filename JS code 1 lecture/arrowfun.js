const user={
    username:"sanjeet",
    price:"999",
    welcomemassage:function(){
        console.log(`${this.username},welcome to webside`);
        console.log(this);
    }

}
/*user.welcomemassage()
user.username ="bittu"
user.welcomemassage()*/
//change because this is curren context;
//console.log(this);




/*function chai (){
    username:"sanjeet"
    console.log(this.username);
}
chai()*/



/*const chai =function(){
    username:"sanjeet"
    console.log(this.username);

}*/
const chai =() =>{
    username:"sanjeet"
    console.log(this);
}

//chai()
/*const addTwo =(num1,num2)=>{
    return num1+num2
}*/
//const addTwo =(num1,num2) =>  num1+num2

//const addTwo =(num1,num2) =>  num1+num2

const addTwo =(num1,num2) =>  ({user:"sanjeet"})

console.log(addTwo(3,5))