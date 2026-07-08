// primitive datatypes

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigInt = 23646323n




/*Reference (Non Primitive)

 Arrays, Objects, Functions

 */ 

const heros = ["shaktiman", "baalveer", "Avengers"]
let myObj ={

    name: "satyam",
    age : 21,
}
const myFunction = function(){
    console.log("Hello World!!");
    
}
console.table([typeof score, scoreValue, isLoggedIn, outsideTemp, userEmail, id, anotherId, bigInt, myFunction] ); // object







 

