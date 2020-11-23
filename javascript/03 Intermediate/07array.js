var country = ["India", "USA", "Russia", "Japan"];

//new way to declare an array
var states = new Array("Gujarat","Rajasthan","Delhi","Mumbai");

//console.log(states[3]);

//console.log(states.length);

//replacing the array value 

states[0]="Punjab";

//console.log(states);

var user = ["KALP","kalp_patel@rocketmail.com",3,34,true];
//console.log(user);

//dumping out the value from last element
//pop method is used

user.pop();
user.pop();
//console.log(user);

//dumping out the value from front element 
//only for info if in case you need to

user.unshift("New value");
//This will gone add the value at front by swiffting everyelement

//console.log(user);

//used to pop out front element
user.shift();
console.log(user);

//read some more on [INDEX OF]
console.log(user.indexOf("kalp"));

console.log(Array.from("kalp"));
//what this going to do is seprating the string and gone make a array
