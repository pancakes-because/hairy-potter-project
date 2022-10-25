/* 

In the main.js module, invoke the makePottery function and provide the required values as arguments. Store the object that gets returned into a variable, and then use console.log() to view the object.

*/ 

// Imports go first

const { makePottery } = require("./PotteryWheel.js")

// Make 5 pieces of pottery at the wheel

let mug = makePottery("mug", 1, 92)
console.log(mug) 

let plate = makePottery("plate", 2, 1.25)
console.log(plate)

let pitcher = makePottery("pitcher", 1, 6.58)
console.log(pitcher)

let flowerVase = makePottery("flower vase", 0.75, 9)
console.log(flowerVase)

let gravyBoat = makePottery("gravy dish", 9.6, 8) 
console.log(gravyBoat)

// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



