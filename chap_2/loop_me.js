#!/usr/bin/env node

// create a loop
for (var i=0; i < 20; i+=5){
    let j = i + 2
    console.log(j)
}

var colors = ["blue", "green", "red", "yellow"]
for (var i=0; i < colors.length; i++){
    console.log(colors[i]+ "\n")
}

for (var eachItem of colors){
    let new_item = eachItem + " " + eachItem
    console.log(new_item)
}
