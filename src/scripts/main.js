/* VIEW THE CODE IN YOUR BROWSER */ 

/* 

In the main.js module, invoke the makePottery function and provide the required values as arguments. Store the object that gets returned into a variable, and then use console.log() to view the object.

*/ 

// Imports go first

import { makePottery } from "./PotteryWheel.js"

import { firePottery } from "./Kiln.js"

import { toSellOrNotToSell } from "./PotteryCatalog.js" 

import { potteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel

let mug = makePottery("mug", 1, 92)
console.log(mug) 

let plate = makePottery("plate", 2, 1.25)
console.log(plate)

let pitcher = makePottery("pitcher", 1, 6.58)
console.log(pitcher)

let flowerVase = makePottery("flower vase", 0.75, 9)
console.log(flowerVase)

let gravyBoat = makePottery("gravy boat", 9.6, 8) 
console.log(gravyBoat)

// Fire each piece of pottery in the kiln

let bakedMug = firePottery(mug,1010)
console.log(bakedMug)

let bakedPlate = firePottery(plate,1111)
console.log(bakedPlate)

let bakedPitcher = firePottery(pitcher,1212)
console.log(bakedPitcher)

let bakedFlowerVase = firePottery(flowerVase,2200)
console.log(bakedFlowerVase)

let bakedGravyBoat = firePottery(gravyBoat,2222)
console.log(bakedGravyBoat)

// Determine which ones should be sold, and their price

let mugForSale = toSellOrNotToSell(bakedMug)
console.log(mugForSale)

let plateForSale = toSellOrNotToSell(bakedPlate)
console.log(plateForSale)

let pitcherForSale = toSellOrNotToSell(bakedPitcher)
console.log(pitcherForSale)

let flowerVaseForSale = toSellOrNotToSell(bakedFlowerVase)
console.log(flowerVaseForSale)

let gravyBoatForSale = toSellOrNotToSell(bakedGravyBoat)
console.log(gravyBoatForSale)

// Invoke the component function that renders the HTML list

let htmlMug = potteryList(mugForSale)
console.log(htmlMug)

let htmlPlate = potteryList(plateForSale)
console.log(htmlPlate)

let htmlPitcher = potteryList(pitcherForSale)
console.log(htmlPitcher)

let htmlFlowerVase = potteryList(flowerVaseForSale)
console.log(htmlFlowerVase)

let htmlGravyBoat = potteryList(gravyBoatForSale)
console.log(htmlGravyBoat)
