/* VIEW THE CODE IN YOUR BROWSER */ 

/* Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1. */ 

let primaryId = 0 

// ALGORITHMIC THINKING 
// I have made a variable inside the function called "potteryItem" with the primary key inside 
// Since we're using "keys", it sounds like we're working with objects. 
// Reading ahead, it seems like I need to have several pieces of pottery. 1 object = 1 piece of pottery. 
// Since I'll have more than 1 object, I made an array to hold the objects and assigned it to my variable. 
// I added a "key" called id to the variable, and the value is "1". 
// I will give each piece of pottery this key value pair. 

/* Define and export a function named makePottery. */ 

// ALROGITHMIC THINKING 
// I made a function named "makePottery"; the body is empty for the moment. 

/* 

The makePottery function must accept the following values as input (i.e. it needs parameters), in the following order.

1. Shape of the piece of pottery (e.g. "Mug", "Platter")
2. Weight of the piece (e.g. 1, 5)
3. Height of the piece (e.g. 3, 7)

*/ 

// ALROGITHMIC THINKING 
// I created paramters called "shape" (string), "weight" (integer), and "height" (integer). 
// **These will also be the "arguments" when the function is called later.** 

/* 

The makePottery function must return an object with the following properties on it.

1. shape
2. weight
3. height
4. id (increment this value each time the function is invoked)

*/ 

// ALROGITHMIC THINKING 
// If I have to "return" something, that means I have to store it in a variable first. 
// I should use the variable I created before, "potteryCollection"? 
// I'll store the returned value in this. I'll have a different name for the value in the function right now. 
// I can use dot notation to create/add properties to the object in the variable. 
// Maybe I need a for..of loop here 


export const makePottery = (shape, weight, height) => {

    const potteryItem = {}

    if (potteryItem) {
        potteryItem.shape = shape 
        potteryItem.weight = weight
        potteryItem.height = height 
        potteryItem.primaryId = primaryId += 1

    }
    return potteryItem 
}

