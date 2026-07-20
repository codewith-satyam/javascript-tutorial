/* Arrays : "array is an object that  store multiple values in a single variable. " 
. values are stored in a sequence.
. Each value has an index number starting from 0.
*/

// Creating Arrays
// 1.using literals
let heros = ["Ironman","Spiderman","Avengers","Thor"]
console.log(heros);

// 2.Using new arrays() constructor
let numbers = new Array(10,20,30)
console.log(numbers);


const myArr2 = new Array(1,2,3,)
console.log(myArr2[2]);

// Arrays method  1. push() 

heros.push("hulk")
console.log(heros);

// 2 pop()
heros.pop(); // deleted last item 
console.log(heros); 

// 3.tostring()
let fooditems = ["Burger", "momos", "apple"]
console.log(fooditems);
console.log(fooditems.toString())

// 4. concat() -- join multiple arrays & return results
let marvelHeros = ["thor","antman","ironman"]
let movieHeros = ["ajay","salman","akshay"]
let heros1 = marvelHeros.concat(movieHeros);
console.log(heros1);

// 5. unshift() -- add to start
let cities = ["gorakhpur","delhi","noida"]
cities.unshift("mumbai")
console.log(cities);

// 6. shift() -- delete from start & return
let cities = ["gorakhpur","delhi","noida"]
let place = cities.shift();
console.log("deleted",place);

// 7.slice()
let cities = ["gorakhpur","delhi","noida"]
console.log(cities.slice(1,3));

















