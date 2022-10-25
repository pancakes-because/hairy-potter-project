/* VIEW THE CODE IN YOUR BROWSER */ 

/* Define and export a function named firePottery that is responsible for acting as a kiln. */ 

/* 

The function must accept the following values as input (i.e. it needs parameters), in the following order. If you don't remember, you can easily add new properties to objects in JavaScript.

1. An object representing a piece of pottery that was made at the wheel in the makePottery function.
2. A number specifying the firing temperature of the kiln. 

*/ 

// ALGORITHMIC THINKING 
// "rawPottery" will be a parameter/argument for a pottery piece made from the wheel 
// "temp" will be a parameter/argument for the firing temperature of the kiln 

/* The function must add a new property of fired with the value of true to the object. */ 

/* 

The function must add a new property of cracked to the object.

1. If the temperature of the kiln is above 2200 degrees then cracked property must have a value of true.
2. If the temperature of the kiln is at, or below, 2200 degrees then cracked property must have a value of false. 

*/ 

// ALGORITHMIC THINKING 
// i'm passing in the pottery object I made with the makePottery() from before 

export const firePottery = (rawPottery,temp) => {

    rawPottery.fired = true; 

    if (temp > 2200 ) {
        rawPottery.cracked = true 
    } else {
        rawPottery.cracked = false; 
    }
    return rawPottery
}
