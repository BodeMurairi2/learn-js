#!/usr/bin/env node

// define an array with new Array
var newArray = new Array("Bode", "school", "ALU");

// define an array with []
var newArrayOption2 = ["Isaac", "Alexis", "Schooly"];

// take element by index in an array
var firstElement = newArray[0];

// take last element
var lastElement = newArrayOption2.at(-1);

console.log(firstElement);
console.log(lastElement);

var vehicles = [
    "Ford", 
    ["Fiesta", "Taurus", "Explorer"], 
    "Honda", 
    ["Pilot", "Civic", "Accord"], 
    "Toyota", 
    ["Corolla", "Camry", "Prius"]
];

console.log(vehicles[1][0]);
console.log(vehicles[1]);

var firstModel = vehicles[1][0];
console.log(firstModel);

var vehicles = [
    "Ford", ["Fiesta", "Taurus", "Explorer"],
    "Honda", ["Pilot", "Civic", "Accord"],
    "Toyota", ["Corolla", "Camry", "Prius"]
];

var myCar = vehicles[2];

console.log(myCar)
