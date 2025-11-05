#!/usr/bin/env node

var increment = 0
var text = ""

while (increment < 10){
    text += `The incrementor has gone to ${increment} \n`
    increment++
}
console.log(text)